import { useEffect, useMemo, useRef, useState } from 'react'
import { createDocument } from '@/entities/document'
import {
  dossierTabs,
  dossierViews,
  inspectorCourtGroups,
  inspectorCourtLevelFilters,
  inspectorJurisdictionFilters,
  inspectorStatusFilters,
} from '@/entities/dossier'
import { selectAssignedJudges } from '@/entities/dossier'
import { useDocumentGenerator } from '@/features/document-generator'
import { useI18n } from '@/shared/i18n/useI18n'

export function useInspectorWorkflow(portfolio) {
  const [portfolioState, setPortfolioState] = useState(portfolio)
  const { generateDocument } = useDocumentGenerator()
  const { t } = useI18n()
  const judges = useMemo(() => selectAssignedJudges(portfolioState), [portfolioState])
  const [selectedJudgeId, setSelectedJudgeId] = useState(judges[0]?.id ?? '')
  const [recentJudgeIds, setRecentJudgeIds] = useState(judges[0]?.id ? [judges[0].id] : [])
  const [searchValue, setSearchValue] = useState('')
  const [portfolioFilters, setPortfolioFilters] = useState({
    status: 'all',
    courtLevel: 'all',
    jurisdiction: 'all',
    region: 'all',
  })
  const [selectedTab, setSelectedTab] = useState('general')
  const [selectedView, setSelectedView] = useState('dossier')
  const [selectedMaterialsFolder, setSelectedMaterialsFolder] = useState('general')
  const scrollPositionsRef = useRef({})
  const detailContentRef = useRef(null)

  const regionOptions = useMemo(() => {
    const uniqueRegions = [...new Set(judges.map((judge) => judge.regionKey))]

    return [
      { value: 'all', labelKey: 'portfolio.filter.region.all' },
      ...uniqueRegions.map((regionKey) => ({
        value: regionKey,
        label: t(regionKey),
      })),
    ]
  }, [judges, t])

  const filteredJudges = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase()

    return judges.filter((judge) => {
      const matchesSearch =
        !normalizedSearch ||
        [judge.fullName, t(judge.courtKey), judge.registryCase, judge.id].join(' ').toLowerCase().includes(normalizedSearch)

      const matchesStatus = portfolioFilters.status === 'all' || judge.status === portfolioFilters.status
      const matchesCourtLevel = portfolioFilters.courtLevel === 'all' || judge.courtLevel === portfolioFilters.courtLevel
      const matchesJurisdiction = portfolioFilters.jurisdiction === 'all' || judge.jurisdiction === portfolioFilters.jurisdiction
      const matchesRegion = portfolioFilters.region === 'all' || judge.regionKey === portfolioFilters.region

      return matchesSearch && matchesStatus && matchesCourtLevel && matchesJurisdiction && matchesRegion
    })
  }, [judges, portfolioFilters, searchValue, t])

  const groupedJudges = useMemo(
    () =>
      inspectorCourtGroups
        .map((group) => ({
          ...group,
          items: filteredJudges.filter((judge) => judge.courtLevel === group.value),
        }))
        .filter((group) => group.items.length > 0),
    [filteredJudges],
  )

  const selectedJudge = useMemo(
    () => portfolioState.dossiers.find((dossier) => dossier.id === selectedJudgeId) ?? portfolioState.dossiers[0],
    [portfolioState, selectedJudgeId],
  )

  useEffect(() => {
    if (!filteredJudges.some((judge) => judge.id === selectedJudgeId)) {
      setSelectedJudgeId(filteredJudges[0]?.id ?? portfolioState.dossiers[0]?.id ?? '')
    }
  }, [filteredJudges, selectedJudgeId, portfolioState])

  useEffect(() => {
    if (!selectedJudgeId) {
      return
    }

    setRecentJudgeIds((current) => [selectedJudgeId, ...current.filter((id) => id !== selectedJudgeId)].slice(0, 5))
  }, [selectedJudgeId])

  useEffect(() => {
    const nextScroll = scrollPositionsRef.current[`${selectedJudge?.id}:${selectedView}`] ?? 0
    if (detailContentRef.current) {
      detailContentRef.current.scrollTop = nextScroll
    }
  }, [selectedJudge?.id, selectedTab, selectedView])

  const handleJudgeSelect = (judgeId) => {
    if (detailContentRef.current && selectedJudge?.id) {
      scrollPositionsRef.current[`${selectedJudge.id}:${selectedView}`] = detailContentRef.current.scrollTop
    }
    setSelectedJudgeId(judgeId)
  }

  const handleContentScroll = () => {
    if (detailContentRef.current && selectedJudge?.id) {
      scrollPositionsRef.current[`${selectedJudge.id}:${selectedView}`] = detailContentRef.current.scrollTop
    }
  }

  const updateSelectedJudge = (updater) => {
    setPortfolioState((current) => ({
      ...current,
      dossiers: current.dossiers.map((dossier) => (dossier.id === selectedJudge.id ? updater(dossier) : dossier)),
    }))
  }

  const handleOpenMaterials = (folderKey) => {
    setSelectedMaterialsFolder(folderKey)
    setSelectedView('materials')
  }

  const setPortfolioFilter = (name, value) => {
    setPortfolioFilters((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleUploadDocument = (folderKey) => {
    const document = createDocument({
      id: `${selectedJudge.id}-${folderKey}-upload-${Date.now()}`,
      titleKey: 'materials.generated.uploadedMaterial',
      section: folderKey,
      kind: 'uploaded',
      createdAt: new Date().toISOString().slice(0, 10),
      source: 'uploaded',
    })

    updateSelectedJudge((dossier) => ({
      ...dossier,
      materials: {
        ...dossier.materials,
        [folderKey]: [document, ...dossier.materials[folderKey]],
      },
    }))
  }

  const handleGenerateDocument = (folderKey) => {
    const document = generateDocument({
      dossierId: selectedJudge.id,
      section: folderKey,
      titleKey: 'materials.generated.report',
    })

    updateSelectedJudge((dossier) => ({
      ...dossier,
      materials: {
        ...dossier.materials,
        [folderKey]: [document, ...dossier.materials[folderKey]],
      },
      documents:
        folderKey === 'documents'
          ? {
              ...dossier.documents,
              registry: [
                {
                  id: document.id,
                  type: 'generated_report',
                  titleKey: document.titleKey,
                  documentNumber: document.id.slice(-8),
                  date: document.createdAt,
                  status: 'active',
                },
                ...dossier.documents.registry,
              ],
            }
          : dossier.documents,
    }))
  }

  const handleOpenDocument = (document) => {
    const preview = window.open('', '_blank', 'noopener,noreferrer')
    if (preview) {
      const title = document.titleKey ? t(document.titleKey) : document.title
      preview.document.write(`<pre style="font-family:Segoe UI, Arial, sans-serif;padding:24px">${title}\n${document.createdAt}\n${document.fileType?.toUpperCase() ?? 'PDF'}</pre>`)
      preview.document.close()
    }
  }

  const materialFolders = useMemo(
    () =>
      [
        { key: 'general', labelKey: 'folder.general' },
        { key: 'career', labelKey: 'folder.career' },
        { key: 'documents', labelKey: 'folder.documents' },
        { key: 'evaluations', labelKey: 'folder.evaluations' },
        { key: 'performance', labelKey: 'folder.performance' },
        { key: 'disciplinary', labelKey: 'folder.disciplinary' },
        { key: 'compliance', labelKey: 'folder.compliance' },
      ].map((folder) => ({
        ...folder,
        documents: selectedJudge?.materials?.[folder.key] ?? [],
      })),
    [selectedJudge],
  )

  const recentDossiers = useMemo(
    () => recentJudgeIds.map((judgeId) => judges.find((judge) => judge.id === judgeId)).filter(Boolean),
    [judges, recentJudgeIds],
  )

  return {
    views: dossierViews,
    portfolioFilters,
    portfolioFilterOptions: {
      status: inspectorStatusFilters,
      courtLevel: inspectorCourtLevelFilters,
      jurisdiction: inspectorJurisdictionFilters,
      region: regionOptions,
    },
    groupedJudges,
    recentDossiers,
    dossierTabs,
    filteredJudges,
    selectedJudge,
    selectedJudgeId,
    selectedTab,
    selectedView,
    selectedMaterialsFolder,
    searchValue,
    setSearchValue,
    setPortfolioFilter,
    setSelectedTab,
    setSelectedView,
    setSelectedMaterialsFolder,
    handleJudgeSelect,
    detailContentRef,
    handleContentScroll,
    handleOpenMaterials,
    handleUploadDocument,
    handleGenerateDocument,
    handleOpenDocument,
    materialFolders,
  }
}

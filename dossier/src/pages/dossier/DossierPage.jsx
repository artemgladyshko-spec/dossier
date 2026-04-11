import { dossierPortfolio, dossierTabs, selectHeaderProfile } from '@/entities/dossier'
import { DossierAnalyticsView } from '@/features/dossier-view'
import { MaterialsView } from '@/features/dossier-files'
import { useInspectorWorkflow } from '@/features/inspector-workspace'
import { DossierHeader } from '@/widgets/dossier-header'
import { DossierTopTabs } from '@/widgets/dossier-top-tabs'
import { InspectorPortfolioSidebar } from '@/widgets/inspector-portfolio-sidebar'
import { InspectorWorkspace } from '@/widgets/inspector-workspace'
import { ViewSwitcher } from '@/widgets/view-switcher'

export function DossierPage() {
  const {
    views,
    groupedJudges,
    recentDossiers,
    portfolioFilters,
    portfolioFilterOptions,
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
  } = useInspectorWorkflow(dossierPortfolio)

  return (
    <InspectorWorkspace
      sidebar={
        <InspectorPortfolioSidebar
          groups={groupedJudges}
          recentDossiers={recentDossiers}
          filters={portfolioFilters}
          filterOptions={portfolioFilterOptions}
          selectedJudgeId={selectedJudgeId}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          onFilterChange={setPortfolioFilter}
          onJudgeSelect={handleJudgeSelect}
        />
      }
      header={<DossierHeader profile={selectHeaderProfile(selectedJudge)} />}
      toolbar={<ViewSwitcher views={views} value={selectedView} onChange={setSelectedView} />}
      tabs={selectedView === 'dossier' ? <DossierTopTabs tabs={dossierTabs} value={selectedTab} onChange={setSelectedTab} /> : null}
      content={
        selectedView === 'dossier' ? (
          <DossierAnalyticsView dossier={selectedJudge} selectedTab={selectedTab} onViewMaterials={handleOpenMaterials} />
        ) : (
          <MaterialsView
            dossierId={selectedJudge?.profile?.dossierId}
            folders={materialFolders}
            activeFolder={selectedMaterialsFolder}
            onFolderChange={setSelectedMaterialsFolder}
            onUpload={handleUploadDocument}
            onGenerate={handleGenerateDocument}
            onOpenDocument={handleOpenDocument}
          />
        )
      }
      contentRef={detailContentRef}
      onContentScroll={handleContentScroll}
    />
  )
}

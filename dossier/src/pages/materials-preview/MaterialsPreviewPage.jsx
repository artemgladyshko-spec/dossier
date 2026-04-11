import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined'
import { Box, Paper, Typography } from '@mui/material'
import { useMemo } from 'react'
import { dossierPortfolio } from '@/entities/dossier'
import { Button } from '@/shared/ui/Button'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

const materialFolderDefinitions = [
  { key: 'general', labelKey: 'folder.general' },
  { key: 'career', labelKey: 'folder.career' },
  { key: 'documents', labelKey: 'folder.documents' },
  { key: 'evaluations', labelKey: 'folder.evaluations' },
  { key: 'performance', labelKey: 'folder.performance' },
  { key: 'disciplinary', labelKey: 'folder.disciplinary' },
  { key: 'compliance', labelKey: 'folder.compliance' },
]

function getDocumentTitle(document, t) {
  return document.titleKey ? t(document.titleKey) : document.title
}

export function MaterialsPreviewPage() {
  const { t } = useI18n()
  const searchParams = new URLSearchParams(window.location.search)
  const dossierId = searchParams.get('dossierId')
  const dossier = dossierPortfolio.dossiers.find((item) => item.profile.dossierId === dossierId) ?? dossierPortfolio.dossiers[0]

  const folderSections = useMemo(
    () =>
      materialFolderDefinitions
        .map((folder) => ({
          ...folder,
          documents: dossier?.materials?.[folder.key] ?? [],
        }))
        .filter((folder) => folder.documents.length > 0),
    [dossier],
  )

  const documentCount = folderSections.reduce((sum, folder) => sum + folder.documents.length, 0)

  const handleBack = () => {
    if (window.history.length > 1) {
      window.close()
      window.history.back()
      return
    }

    window.location.href = '/'
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: designTokens.colors.backgroundAccent,
      }}
    >
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          borderBottom: `1px solid ${designTokens.colors.border}`,
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Box
          sx={{
            maxWidth: 1120,
            mx: 'auto',
            px: { xs: 2, md: 3 },
            py: 1.5,
            display: 'flex',
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'space-between',
            gap: 1.5,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: 0 }}>
            <Typography variant="subtitle2" color="text.secondary">
              {t('materials.fullPreviewEyebrow')}
            </Typography>
            <Typography variant="h6">
              {t('materials.fullPreviewTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${dossier?.profile?.dossierId ?? ''} • ${documentCount} ${t('materials.documentsCount')}`}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant="outlined" startIcon={<ArrowBackOutlinedIcon />} onClick={handleBack}>
              {t('materials.fullPreviewBack')}
            </Button>
            <Button variant="outlined" startIcon={<LocalPrintshopOutlinedIcon />} onClick={() => window.print()}>
              {t('materials.fullPreviewPrint')}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          px: { xs: 1.5, sm: 2, md: 3 },
          py: { xs: 2, md: 3 },
        }}
      >
        {folderSections.length ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {folderSections.map((folder) => (
              <Box key={folder.key} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ px: { xs: 0.5, md: 2 } }}
                >
                  {t(folder.labelKey)}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {folder.documents.map((document) => (
                    <Paper
                      key={document.id}
                      elevation={0}
                      sx={{
                        width: '100%',
                        maxWidth: 860,
                        mx: 'auto',
                        p: { xs: 2, sm: 3, md: 5 },
                        bgcolor: '#ffffff',
                        borderRadius: 2,
                        border: `1px solid ${designTokens.colors.border}`,
                        boxShadow: '0 16px 40px rgba(20, 32, 43, 0.08)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <DescriptionOutlinedIcon fontSize="small" sx={{ color: designTokens.colors.textMuted }} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {getDocumentTitle(document, t)}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                          gap: 1.5,
                          mb: 3,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: designTokens.colors.background,
                        }}
                      >
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            {t('materials.table.createdAt')}
                          </Typography>
                          <Typography variant="body2">{document.createdAt}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            {t('materials.table.source')}
                          </Typography>
                          <Typography variant="body2">{t(`materials.source.${document.source}`)}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">
                            {t('materials.viewerType')}
                          </Typography>
                          <Typography variant="body2">{(document.fileType ?? 'pdf').toUpperCase()}</Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {t('materials.fullPreviewParagraphOne')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {t('materials.fullPreviewParagraphTwo')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {t('materials.fullPreviewParagraphThree')}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Paper
            elevation={0}
            sx={{
              maxWidth: 860,
              mx: 'auto',
              p: { xs: 3, md: 5 },
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {t('materials.viewerEmpty')}
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  )
}

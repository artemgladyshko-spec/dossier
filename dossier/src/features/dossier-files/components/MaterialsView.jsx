import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import { Alert, Box, LinearProgress, List, ListItemButton, Paper, Typography } from '@mui/material'
import { useMemo } from 'react'
import { Button } from '@/shared/ui/Button'
import { Table } from '@/shared/ui/Table'
import { useMaterialsPdfExport } from '@/features/dossier-files/hooks/useMaterialsPdfExport'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function MaterialsView({
  dossierId,
  folders,
  activeFolder,
  onFolderChange,
  onUpload,
  onGenerate,
  onOpenDocument,
}) {
  const { t } = useI18n()
  const active = folders.find((folder) => folder.key === activeFolder) ?? folders[0]
  const { isExporting, exportProgress, exportStatus, exportAllDocuments } = useMaterialsPdfExport({ t })
  const allDocuments = useMemo(
    () =>
      folders.flatMap((folder) =>
        folder.documents.map((document) => ({
          ...document,
          folderKey: folder.key,
          folderLabelKey: folder.labelKey,
        })),
      ),
    [folders],
  )

  const columns = [
    {
      key: 'title',
      label: t('materials.table.title'),
      render: (row) => row.titleKey ? t(row.titleKey) : row.title,
    },
    {
      key: 'source',
      label: t('materials.table.source'),
      render: (row) => t(`materials.source.${row.source}`),
    },
    { key: 'createdAt', label: t('materials.table.createdAt') },
    {
      key: 'action',
      label: t('materials.table.action'),
      render: (row) => (
        <Button variant="outlined" onClick={() => onOpenDocument(row)}>
          {t('materials.open')}
        </Button>
      ),
    },
  ]

  const actionButtonSx = {
    flexShrink: 0,
    fontSize: '0.75rem',
    px: 1.25,
    py: 0.5,
    minHeight: 28,
  }

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '260px minmax(0, 1fr)' },
        borderRadius: 2,
        overflow: 'hidden',
        border: `1px solid ${designTokens.colors.border}`,
        boxShadow: designTokens.shadows.card,
        bgcolor: designTokens.colors.surface,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 1.5,
          minWidth: 0,
          bgcolor: designTokens.colors.background,
          borderRight: { xs: 'none', lg: `1px solid ${designTokens.colors.border}` },
          borderBottom: { xs: `1px solid ${designTokens.colors.border}`, lg: 'none' },
          boxShadow: 'none',
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          {t('materials.folders')}
        </Typography>
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          {folders.map((folder) => (
            <ListItemButton
              key={folder.key}
              selected={folder.key === activeFolder}
              onClick={() => onFolderChange(folder.key)}
              sx={{
                minHeight: 0,
                alignItems: 'center',
                gap: 1,
                px: 1.25,
                py: 1,
                pl: `calc(${10 + (folder.depth ?? 0) * 16}px + ${designTokens.spacing.xs * 2}px)`,
                borderRadius: 1.5,
                transition: 'background-color 120ms ease',
                '&:hover': {
                  bgcolor: 'rgba(20,32,43,0.04)',
                },
                '&.Mui-selected': {
                  bgcolor: 'rgba(31,95,153,0.10)',
                },
                '&.Mui-selected:hover': {
                  bgcolor: 'rgba(31,95,153,0.14)',
                },
              }}
            >
              <Box
                sx={{
                  width: 24,
                  minWidth: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: folder.key === activeFolder ? designTokens.colors.primary : designTokens.colors.textMuted,
                }}
              >
                {folder.key === activeFolder ? <FolderOpenOutlinedIcon fontSize="small" /> : <FolderOutlinedIcon fontSize="small" />}
              </Box>
              <Box sx={{ minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: folder.key === activeFolder ? 600 : 500,
                    color: 'text.primary',
                    lineHeight: 1.25,
                  }}
                >
                  {t(folder.labelKey)}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.25 }}>
                  {`${folder.documents.length} ${t('materials.documentsCount')}`}
                </Typography>
              </Box>
            </ListItemButton>
          ))}
        </List>
      </Paper>
      <Box
        sx={{
          minWidth: 0,
          p: designTokens.layout.cardPadding,
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, md: 3 },
          bgcolor: designTokens.colors.surface,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pb: 2,
            borderBottom: `1px solid ${designTokens.colors.border}`,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h6" sx={{ color: 'text.primary' }}>
              {t(active.labelKey)}
            </Typography>
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="body2" color="text.secondary">
              {t('materials.subtitle')}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'flex-start',
              minWidth: 0,
            }}
          >
            <Button
              size="small"
              sx={actionButtonSx}
              variant="outlined"
              disabled={!allDocuments.length}
              onClick={() => {
                if (!allDocuments.length) {
                  return
                }

                const previewUrl = `/materials/preview?dossierId=${encodeURIComponent(dossierId ?? '')}`
                const previewWindow = window.open(previewUrl, '_blank', 'noopener,noreferrer')
                if (!previewWindow) {
                  window.location.href = previewUrl
                }
              }}
            >
              {t('materials.previewAll')}
            </Button>
            <Button
              size="small"
              sx={actionButtonSx}
              variant="outlined"
              disabled={!allDocuments.length || isExporting}
              onClick={() => exportAllDocuments({ folders, dossierId })}
            >
              {isExporting ? `${t('materials.exportInProgress')} ${exportProgress}%` : t('materials.exportAllPdf')}
            </Button>
            <Button size="small" sx={actionButtonSx} variant="outlined" onClick={() => onUpload(active.key)}>
              {t('materials.upload')}
            </Button>
            <Button size="small" sx={actionButtonSx} variant="contained" onClick={() => onGenerate(active.key)}>
              {t('materials.generate')}
            </Button>
          </Box>
        </Box>
        {isExporting ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <LinearProgress variant="determinate" value={exportProgress} />
            <Typography variant="caption" color="text.secondary">
              {t('materials.exportProgressLabel', { progress: exportProgress })}
            </Typography>
          </Box>
        ) : null}
        {exportStatus ? <Alert severity={exportStatus.kind}>{exportStatus.message}</Alert> : null}
        <Table columns={columns} rows={active.documents} emptyLabel={t('materials.empty')} />
      </Box>
    </Paper>
  )
}

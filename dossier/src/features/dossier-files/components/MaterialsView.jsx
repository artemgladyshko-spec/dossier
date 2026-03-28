import { Box, List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'

export function MaterialsView({
  folders,
  activeFolder,
  onFolderChange,
  onUpload,
  onGenerate,
  onOpenDocument,
}) {
  const { t } = useI18n()
  const active = folders.find((folder) => folder.key === activeFolder) ?? folders[0]

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

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '260px minmax(0, 1fr)' }, gap: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
          {t('materials.folders')}
        </Typography>
        <List disablePadding>
          {folders.map((folder) => (
            <ListItemButton
              key={folder.key}
              selected={folder.key === activeFolder}
              onClick={() => onFolderChange(folder.key)}
              sx={{ borderRadius: 1, mb: 0.5 }}
            >
              <ListItemText
                primary={t(folder.labelKey)}
                secondary={`${folder.documents.length} ${t('materials.documentsCount')}`}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
      <Card
        title={t(active.labelKey)}
        subtitle={t('materials.subtitle')}
        action={
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" onClick={() => onUpload(active.key)}>
              {t('materials.upload')}
            </Button>
            <Button variant="contained" onClick={() => onGenerate(active.key)}>
              {t('materials.generate')}
            </Button>
          </Box>
        }
      >
        <Table columns={columns} rows={active.documents} emptyLabel={t('materials.empty')} />
      </Card>
    </Box>
  )
}

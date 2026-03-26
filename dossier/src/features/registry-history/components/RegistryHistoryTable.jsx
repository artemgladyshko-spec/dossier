import { Box, Typography } from '@mui/material'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'

export function RegistryHistoryTable({ records }) {
  const { t } = useI18n()

  const columns = [
    { key: 'recordDate', label: t('table.recordDate') },
    { key: 'registry', label: t('table.registry') },
    { key: 'action', label: t('table.action') },
    { key: 'reference', label: t('table.reference') },
    { key: 'operator', label: t('table.operator') },
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Table columns={columns} rows={records} emptyLabel={t('registry.empty')} />
      <Typography variant="body2" color="text.secondary">
        {t('registry.tableNote')}
      </Typography>
    </Box>
  )
}

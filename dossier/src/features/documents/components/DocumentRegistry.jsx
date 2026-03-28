import { Box, Typography } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useDocuments } from '../hooks/useDocuments'

export function DocumentRegistry({ dossier }) {
  const { t } = useI18n()
  const { registryColumns, registryRows, decisions } = useDocuments(dossier, t)

  return (
    <Card id="documents" title={t('dossier.section.documents')}>
      <Table columns={registryColumns} rows={registryRows} emptyLabel="-" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {t('documents.decisions')}
        </Typography>
        {decisions.map((item) => (
          <Typography key={item.id} variant="body2" color="text.secondary">
            {item.date}: {item.title} ({item.file})
          </Typography>
        ))}
      </Box>
    </Card>
  )
}

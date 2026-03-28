import { Box, Typography } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { usePerformance } from '../hooks/usePerformance'

export function PerformanceMetrics({ dossier }) {
  const { t } = useI18n()
  const { metrics, periodColumns, periodRows } = usePerformance(dossier, t)

  return (
    <Card id="performance" title={t('dossier.section.performance')}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
        {metrics.map((metric) => (
          <Box key={metric.id} sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              {metric.label}
            </Typography>
            <Typography variant="h6">{metric.value}</Typography>
            <Typography variant="body2" color="text.secondary">
              {metric.period}
            </Typography>
          </Box>
        ))}
      </Box>
      <Table columns={periodColumns} rows={periodRows} emptyLabel="-" />
    </Card>
  )
}

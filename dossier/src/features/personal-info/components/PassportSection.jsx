import { Box } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { DatePicker } from '@/shared/ui/DatePicker'
import { Input } from '@/shared/ui/Input'
import { useI18n } from '@/shared/i18n/useI18n'

export function PassportSection({ data, onChange }) {
  const { t } = useI18n()

  return (
    <Card id="passport" title={t('dossier.section.passport')}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        <Input label={t('field.passportSeries')} value={data.series} onChange={(value) => onChange('series', value)} />
        <Input label={t('field.passportNumber')} value={data.number} onChange={(value) => onChange('number', value)} />
        <Input
          label={t('field.issuedBy')}
          value={data.issuedBy}
          onChange={(value) => onChange('issuedBy', value)}
          sx={{ gridColumn: { xs: 'auto', md: 'span 2' } }}
        />
        <DatePicker label={t('field.issueDate')} value={data.issueDate} onChange={(value) => onChange('issueDate', value)} />
        <DatePicker label={t('field.expiryDate')} value={data.expiryDate} onChange={(value) => onChange('expiryDate', value)} />
      </Box>
    </Card>
  )
}

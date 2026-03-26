import { Box } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { useI18n } from '@/shared/i18n/useI18n'

export function AddressSection({ data, onChange }) {
  const { t } = useI18n()

  return (
    <Card id="address" title={t('dossier.section.address')}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        <Input label={t('field.country')} value={data.country} onChange={(value) => onChange('country', value)} />
        <Input label={t('field.region')} value={data.region} onChange={(value) => onChange('region', value)} />
        <Input label={t('field.city')} value={data.city} onChange={(value) => onChange('city', value)} />
        <Input label={t('field.postalCode')} value={data.postalCode} onChange={(value) => onChange('postalCode', value)} />
        <Input
          label={t('field.street')}
          value={data.street}
          onChange={(value) => onChange('street', value)}
          sx={{ gridColumn: { xs: 'auto', md: 'span 2' } }}
        />
      </Box>
    </Card>
  )
}

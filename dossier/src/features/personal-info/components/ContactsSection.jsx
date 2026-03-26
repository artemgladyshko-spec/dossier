import { Box } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { useI18n } from '@/shared/i18n/useI18n'

export function ContactsSection({ data, errors, onChange }) {
  const { t } = useI18n()

  return (
    <Card id="contacts" title={t('dossier.section.contacts')}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        <Input label={t('field.phone')} value={data.phone} onChange={(value) => onChange('phone', value)} />
        <Input
          label={t('field.email')}
          value={data.email}
          error={errors.email}
          helperText={errors.email ? t('validation.invalidEmail') : ''}
          onChange={(value) => onChange('email', value)}
        />
        <Input
          label={t('field.emergencyContact')}
          value={data.emergencyContact}
          onChange={(value) => onChange('emergencyContact', value)}
          sx={{ gridColumn: { xs: 'auto', md: 'span 2' } }}
        />
      </Box>
    </Card>
  )
}

import { Box } from '@mui/material'
import { DatePicker } from '@/shared/ui/DatePicker'
import { Input } from '@/shared/ui/Input'
import { Card } from '@/shared/ui/Card'
import { Select } from '@/shared/ui/Select'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function PersonalInfoSection({ data, errors, onChange }) {
  const { t } = useI18n()

  return (
    <Card
      id="personal-info"
      title={t('dossier.section.personalInfo')}
      subtitle={t('dossier.pageSubtitle')}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: designTokens.layout.formGap,
          alignItems: 'start',
        }}
      >
        <Input label={t('field.lastName')} value={data.lastName} error={errors.lastName} onChange={(value) => onChange('lastName', value)} />
        <Input label={t('field.firstName')} value={data.firstName} error={errors.firstName} onChange={(value) => onChange('firstName', value)} />
        <Input label={t('field.middleName')} value={data.middleName} onChange={(value) => onChange('middleName', value)} />
        <DatePicker label={t('field.birthDate')} value={data.birthDate} onChange={(value) => onChange('birthDate', value)} />
        <Select
          label={t('field.gender')}
          value={data.gender}
          onChange={(value) => onChange('gender', value)}
          options={[
            { value: 'female', label: t('gender.female') },
            { value: 'male', label: t('gender.male') },
          ]}
        />
        <Input label={t('field.taxId')} value={data.taxId} error={errors.taxId} onChange={(value) => onChange('taxId', value)} />
        <Input
          label={t('field.citizenship')}
          value={data.citizenship}
          onChange={(value) => onChange('citizenship', value)}
          sx={{ gridColumn: { xs: 'auto', md: 'span 2' } }}
        />
      </Box>
    </Card>
  )
}

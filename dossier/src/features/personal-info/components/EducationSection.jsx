import { Box } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { Select } from '@/shared/ui/Select'
import { useI18n } from '@/shared/i18n/useI18n'

export function EducationSection({ data, errors, onChange }) {
  const { t } = useI18n()

  return (
    <Card id="education" title={t('dossier.section.education')}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        <Input label={t('field.degree')} value={data.degree} onChange={(value) => onChange('degree', value)} />
        <Input label={t('field.graduationYear')} value={data.graduationYear} onChange={(value) => onChange('graduationYear', value)} />
        <Input
          label={t('field.institution')}
          value={data.institution}
          error={errors.institution}
          onChange={(value) => onChange('institution', value)}
          sx={{ gridColumn: { xs: 'auto', md: 'span 2' } }}
        />
        <Input
          label={t('field.specialization')}
          value={data.specialization}
          onChange={(value) => onChange('specialization', value)}
        />
        <Select
          label={t('field.studyForm')}
          value={data.studyForm}
          onChange={(value) => onChange('studyForm', value)}
          options={[
            { value: 'fullTime', label: t('education.fullTime') },
            { value: 'partTime', label: t('education.partTime') },
          ]}
        />
      </Box>
    </Card>
  )
}

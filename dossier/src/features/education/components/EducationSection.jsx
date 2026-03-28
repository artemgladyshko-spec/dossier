import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useEducation } from '../hooks/useEducation'

export function EducationSection({ dossier }) {
  const { t } = useI18n()
  const { columns, rows } = useEducation(dossier, t)

  return <Card id="education" title={t('dossier.section.education')}><Table columns={columns} rows={rows} emptyLabel="-" /></Card>
}

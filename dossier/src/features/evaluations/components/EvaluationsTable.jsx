import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useEvaluations } from '../hooks/useEvaluations'

export function EvaluationsTable({ dossier }) {
  const { t } = useI18n()
  const { columns, rows } = useEvaluations(dossier, t)

  return <Card id="evaluations" title={t('dossier.section.evaluations')}><Table columns={columns} rows={rows} emptyLabel="-" /></Card>
}

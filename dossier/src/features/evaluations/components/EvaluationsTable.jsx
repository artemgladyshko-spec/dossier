import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useEvaluations } from '../hooks/useEvaluations'

export function EvaluationsTable({ dossier, onViewMaterials, materialSection = 'evaluations' }) {
  const { t } = useI18n()
  const { columns, rows } = useEvaluations(dossier, t)

  return (
    <Card
      id="evaluations"
      title={t('dossier.section.evaluations')}
      action={
        onViewMaterials ? (
          <Button variant="outlined" onClick={() => onViewMaterials(materialSection)}>
            {t('actions.viewMaterials')}
          </Button>
        ) : null
      }
    >
      <Table columns={columns} rows={rows} emptyLabel="-" />
    </Card>
  )
}

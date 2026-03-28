import { Box, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useDisciplinary } from '../hooks/useDisciplinary'

export function DisciplinarySection({ dossier, onViewMaterials, materialSection = 'disciplinary' }) {
  const { t } = useI18n()
  const { complaintColumns, complaints, caseColumns, cases } = useDisciplinary(dossier, t)

  return (
    <Card
      id="disciplinary"
      title={t('dossier.section.disciplinary')}
      action={
        onViewMaterials ? (
          <Button variant="outlined" onClick={() => onViewMaterials(materialSection)}>
            {t('actions.viewMaterials')}
          </Button>
        ) : null
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('disciplinary.complaints')}
          </Typography>
          <Table columns={complaintColumns} rows={complaints} emptyLabel="-" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('disciplinary.cases')}
          </Typography>
          <Table columns={caseColumns} rows={cases} emptyLabel="-" />
        </Box>
      </Box>
    </Card>
  )
}

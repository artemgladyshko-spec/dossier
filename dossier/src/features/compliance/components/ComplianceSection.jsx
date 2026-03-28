import { Box, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { useI18n } from '@/shared/i18n/useI18n'
import { useCompliance } from '../hooks/useCompliance'

export function ComplianceSection({ dossier, onViewMaterials, materialSection = 'compliance' }) {
  const { t } = useI18n()
  const { declarationColumns, declarations, controlColumns, controls, riskFlags } = useCompliance(dossier, t)

  return (
    <Card
      id="compliance"
      title={t('dossier.section.compliance')}
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
            {t('compliance.declarations')}
          </Typography>
          <Table columns={declarationColumns} rows={declarations} emptyLabel="-" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('compliance.controls')}
          </Typography>
          <Table columns={controlColumns} rows={controls} emptyLabel="-" />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('compliance.riskFlags')}
          </Typography>
          {riskFlags.map((flag) => (
            <Typography key={flag} variant="body2" color="text.secondary">
              • {flag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  )
}

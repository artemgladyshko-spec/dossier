import { Box, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { DossierTimeline } from '@/widgets/dossier-timeline'
import { useI18n } from '@/shared/i18n/useI18n'
import { useCareer } from '../hooks/useCareer'

export function CareerTimeline({ dossier, onViewMaterials, materialSection = 'career' }) {
  const { t } = useI18n()
  const { timelineItems, courtHistory, roles } = useCareer(dossier)

  return (
    <Card
      id="career"
      title={t('dossier.section.career')}
      action={
        onViewMaterials ? (
          <Button variant="outlined" onClick={() => onViewMaterials(materialSection)}>
            {t('actions.viewMaterials')}
          </Button>
        ) : null
      }
    >
      <DossierTimeline items={timelineItems} />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('career.courtHistory')}
          </Typography>
          {courtHistory.map((item) => (
            <Typography key={item.id} variant="body2" color="text.secondary">
              {item.period}: {item.court} ({item.chamber})
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {t('career.roles')}
          </Typography>
          {roles.map((item) => (
            <Typography key={item.id} variant="body2" color="text.secondary">
              {item.period}: {item.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  )
}

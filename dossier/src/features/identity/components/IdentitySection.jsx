import { Box, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { useI18n } from '@/shared/i18n/useI18n'
import { useIdentity } from '../hooks/useIdentity'

function DetailBlock({ title, rows }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {rows.map((row) => (
        <Box key={row.label} sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          <Typography variant="body2" color="text.secondary">
            {row.label}
          </Typography>
          <Typography variant="body2">{row.value}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export function IdentitySection({ dossier, onViewMaterials, materialSection = 'general' }) {
  const { t } = useI18n()
  const sections = useIdentity(dossier)

  return (
    <Card
      id="identity"
      title={t('dossier.section.identity')}
      action={
        onViewMaterials ? (
          <Button variant="outlined" onClick={() => onViewMaterials(materialSection)}>
            {t('actions.viewMaterials')}
          </Button>
        ) : null
      }
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, md: 3 } }}>
        <DetailBlock title={t('identity.personal')} rows={sections.personal} />
        <DetailBlock title={t('identity.passport')} rows={sections.passport} />
        <DetailBlock title={t('identity.contacts')} rows={sections.contacts} />
      </Box>
    </Card>
  )
}

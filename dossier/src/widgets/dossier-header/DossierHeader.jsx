import { Avatar, Box, Chip, Typography } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { designTokens } from '@/shared/ui/theme/tokens'
import { useI18n } from '@/shared/i18n/useI18n'

const statusToneMap = {
  in_progress: { backgroundColor: '#edf4fb', color: 'primary.main' },
  completed: { backgroundColor: '#edf7f0', color: 'success.main' },
  new: { backgroundColor: '#fff4e8', color: 'warning.main' },
}

export function DossierHeader({ profile }) {
  const { t } = useI18n()

  if (!profile) {
    return null
  }

  const firstInitial = profile.firstName?.[0] ?? ''
  const lastInitial = profile.lastName?.[0] ?? ''
  const initials = `${firstInitial}${lastInitial}`.trim()
  const statusTone = statusToneMap[profile.status] ?? statusToneMap.in_progress

  return (
    <Card id="profile-header" title={t('app.title')}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 3 },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Avatar
          src={profile.photo}
          sx={{
            width: 88,
            height: 88,
            bgcolor: 'primary.main',
            fontSize: 28,
            boxShadow: designTokens.shadows.card,
            border: `3px solid ${designTokens.colors.primarySoft}`,
          }}
        >
          {initials}
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, minWidth: 0, flex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.125rem', md: '1.375rem' }, fontWeight: 700 }}>
              {[profile.lastName, profile.firstName, profile.middleName].filter(Boolean).join(' ')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(profile.positionKey)}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            <Chip label={t(`portfolio.status.${profile.status}`)} size="small" variant="filled" sx={statusTone} />
            <Chip label={`${t('dossier.profile.departmentLabel')}: ${t(profile.departmentKey)}`} size="small" variant="outlined" />
            <Chip label={`${t('dossier.profile.idLabel')}: ${profile.dossierId}`} size="small" variant="outlined" />
            <Chip label={`${t('dossier.profile.caseLabel')}: ${profile.registryCase}`} size="small" variant="outlined" />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

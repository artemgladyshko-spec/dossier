import { Avatar, Box, Chip, Typography } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function HeaderProfileWidget({ profile }) {
  const { t } = useI18n()
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <Card id="profile-header" title={t('sidebar.profileHeader')}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Avatar
          src={profile.photo}
          sx={{
            width: 116,
            height: 116,
            bgcolor: 'primary.main',
            fontSize: 38,
            boxShadow: designTokens.shadows.card,
            border: `4px solid ${designTokens.colors.primarySoft}`,
          }}
        >
          {initials}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0, flex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700 }}>
              {profile.lastName} {profile.firstName} {profile.middleName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>
              {profile.position}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
            <Chip
              label={t('dossier.profile.status')}
              color="success"
              variant="filled"
              sx={{ bgcolor: '#edf7f0', color: 'success.main' }}
            />
            <Chip label={`${t('dossier.profile.departmentLabel')}: ${profile.department}`} variant="outlined" />
            <Chip label={`${t('dossier.profile.idLabel')}: ${profile.dossierId}`} variant="outlined" />
            <Chip label={`${t('dossier.profile.caseLabel')}: ${profile.registryCase}`} variant="outlined" />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

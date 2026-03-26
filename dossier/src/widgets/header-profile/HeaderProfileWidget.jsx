import { Avatar, Box, Chip, Typography } from '@mui/material'
import { Card } from '@/shared/ui/Card'
import { useI18n } from '@/shared/i18n/useI18n'

export function HeaderProfileWidget({ profile }) {
  const { t } = useI18n()
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <Card id="profile-header" title={t('sidebar.profileHeader')}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        <Avatar src={profile.photo} sx={{ width: 92, height: 92, bgcolor: 'primary.main', fontSize: 30 }}>
          {initials}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, minWidth: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="h4">
              {profile.lastName} {profile.firstName} {profile.middleName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {profile.position}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label={t('dossier.profile.status')} color="success" variant="outlined" />
            <Chip label={`${t('dossier.profile.departmentLabel')}: ${profile.department}`} variant="outlined" />
            <Chip label={`${t('dossier.profile.idLabel')}: ${profile.dossierId}`} variant="outlined" />
            <Chip label={`${t('dossier.profile.caseLabel')}: ${profile.registryCase}`} variant="outlined" />
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

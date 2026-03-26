import { Box, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function DossierLayoutWidget({ sidebar, header, children }) {
  const { t } = useI18n()

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '300px minmax(0, 1fr)' },
        minHeight: '100%',
      }}
    >
      <Box sx={{ minWidth: 0, borderRight: { xs: 0, lg: 1 }, borderColor: 'divider' }}>{sidebar}</Box>
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          minWidth: 0,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('dossier.pageEyebrow')}
          </Typography>
          <Typography variant="h3">{t('dossier.pageTitle')}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 880 }}>
            {t('dossier.pageSubtitle')}
          </Typography>
        </Box>
        {header}
        <Box sx={{ display: 'grid', gap: 3 }}>{children}</Box>
      </Box>
    </Box>
  )
}

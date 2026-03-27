import { Box, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function DossierLayoutWidget({ sidebar, header, children }) {
  const { t } = useI18n()

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '300px minmax(0, 1fr)' },
        minHeight: '100%',
        backgroundColor: designTokens.colors.background,
      }}
    >
      <Box sx={{ minWidth: 0, borderRight: { xs: 0, lg: 1 }, borderColor: 'divider' }}>{sidebar}</Box>
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 3, md: 4 },
          minWidth: 0,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('dossier.pageEyebrow')}
          </Typography>
          <Typography variant="h3" sx={{ maxWidth: 760 }}>
            {t('dossier.pageTitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 880 }}>
            {t('dossier.pageSubtitle')}
          </Typography>
        </Box>
        {header}
        <Box sx={{ display: 'grid', gap: { xs: 2, md: 3 } }}>{children}</Box>
      </Box>
    </Box>
  )
}

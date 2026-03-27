import { Box, Divider, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function AppShell({ children }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          py: 2,
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          position: 'sticky',
          top: 0,
          zIndex: 20,
          boxShadow: '0 2px 10px rgba(17, 37, 63, 0.04)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('dossier.pageEyebrow')}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>
            {t('app.title')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="body2" color="text.secondary">
            {t('app.language')}
          </Typography>
          <FormControl size="small" sx={{ minWidth: 96 }}>
            <Select value={locale} onChange={(event) => setLocale(event.target.value)}>
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ua">UA</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          background: `linear-gradient(180deg, ${designTokens.colors.background} 0%, ${designTokens.colors.backgroundAccent} 100%)`,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

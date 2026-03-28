import { Avatar, Box, IconButton, InputBase, Paper, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

const headerActionButtonSx = {
  width: 38,
  height: 38,
  color: 'rgba(255, 255, 255, 0.78)',
  bgcolor: 'rgba(255, 255, 255, 0.06)',
  borderRadius: 1.5,
  '&:hover': {
    bgcolor: 'rgba(255, 255, 255, 0.12)',
  },
}

function UtilityGlyph({ children }) {
  return (
    <Box
      component="span"
      sx={{
        fontSize: '0.95rem',
        lineHeight: 1,
        fontWeight: 600,
      }}
    >
      {children}
    </Box>
  )
}

const labelsByLocale = {
  en: {
    organization: 'High Qualification Commission of Judges of Ukraine',
    organizationSubtitle: 'Internal inspector workspace',
    search: 'Search',
    searchPlaceholder: 'Search dossier, judge, or case',
    favorites: 'Favorites',
    notifications: 'Notifications',
    userName: 'Shabelok I.V.',
    userRole: 'HQCJ staff member',
    logoText: 'HQCJ',
    avatarText: 'IV',
  },
  ua: {
    organization:
      '\u0412\u0438\u0449\u0430 \u043a\u0432\u0430\u043b\u0456\u0444\u0456\u043a\u0430\u0446\u0456\u0439\u043d\u0430 \u043a\u043e\u043c\u0456\u0441\u0456\u044f \u0441\u0443\u0434\u0434\u0456\u0432 \u0423\u043a\u0440\u0430\u0457\u043d\u0438',
    organizationSubtitle:
      'Internal inspector workspace',
    search: '\u041f\u043e\u0448\u0443\u043a',
    searchPlaceholder:
      '\u041f\u043e\u0448\u0443\u043a \u0434\u043e\u0441\u044c\u0454, \u0441\u0443\u0434\u0434\u0456 \u0430\u0431\u043e \u0441\u043f\u0440\u0430\u0432\u0438',
    favorites: '\u041e\u0431\u0440\u0430\u043d\u0435',
    notifications: '\u0421\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f',
    userName: '\u0428\u0430\u0431\u0435\u043b\u044c\u043e\u043a \u0406.\u0412.',
    userRole:
      '\u0421\u043f\u0456\u0432\u0440\u043e\u0431\u0456\u0442\u043d\u0438\u043a \u0412\u041a\u041a\u0421',
    logoText: '\u0412\u041a\u041a\u0421',
    avatarText: '\u0406\u0412',
  },
}

export function AppShell({ children }) {
  const { locale } = useI18n()
  const labels = labelsByLocale[locale] ?? labelsByLocale.ua

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
          px: { xs: 2, md: 3 },
          py: 1.5,
          bgcolor: '#0f2745',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          position: 'sticky',
          top: 0,
          zIndex: 20,
          boxShadow: '0 10px 24px rgba(8, 19, 36, 0.18)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            minWidth: 0,
            flex: '1 1 auto',
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 1.5,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              display: 'grid',
              placeItems: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}
          >
            {labels.logoText}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: '0.95rem',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#ffffff',
              }}
            >
              {labels.organization}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem',
                lineHeight: 1.2,
                color: 'rgba(255, 255, 255, 0.66)',
              }}
            >
              {labels.organizationSubtitle}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flexShrink: 0,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              px: 1.25,
              height: 38,
              minWidth: 240,
              bgcolor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              borderRadius: 1.5,
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1,
                color: 'rgba(255, 255, 255, 0.72)',
              }}
            >
              ⌕
            </Box>
            <InputBase
              placeholder={labels.searchPlaceholder}
              sx={{
                flex: 1,
                color: '#ffffff',
                fontSize: '0.875rem',
                '& input::placeholder': {
                  color: 'rgba(255, 255, 255, 0.56)',
                  opacity: 1,
                },
              }}
            />
          </Paper>

          <IconButton aria-label={labels.search} sx={{ ...headerActionButtonSx, display: { xs: 'inline-flex', md: 'none' } }}>
            <UtilityGlyph>⌕</UtilityGlyph>
          </IconButton>
          <IconButton aria-label={labels.favorites} sx={headerActionButtonSx}>
            <UtilityGlyph>☆</UtilityGlyph>
          </IconButton>
          <IconButton aria-label={labels.notifications} sx={headerActionButtonSx}>
            <UtilityGlyph>◌</UtilityGlyph>
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              pl: 0.5,
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                alignItems: 'flex-end',
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.15,
                }}
              >
                {labels.userName}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.68)',
                  lineHeight: 1.15,
                }}
              >
                {labels.userRole}
              </Typography>
            </Box>
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              {labels.avatarText}
            </Avatar>
          </Box>
        </Box>
      </Box>

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

import { createTheme } from '@mui/material/styles'
import { designTokens } from './tokens'

export const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      main: designTokens.colors.primary,
      dark: designTokens.colors.primaryDark,
    },
    secondary: {
      main: designTokens.colors.textSecondary,
    },
    background: {
      default: designTokens.colors.background,
      paper: designTokens.colors.surface,
    },
    text: {
      primary: designTokens.colors.textPrimary,
      secondary: designTokens.colors.textSecondary,
    },
    divider: designTokens.colors.border,
    success: {
      main: designTokens.colors.success,
    },
    warning: {
      main: designTokens.colors.warning,
    },
    error: {
      main: designTokens.colors.error,
    },
  },
  shape: {
    borderRadius: designTokens.layout.radius,
  },
  typography: {
    fontFamily: '"Segoe UI", "Arial", sans-serif',
    h3: designTokens.typography.pageTitle,
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: designTokens.typography.sectionTitle,
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: designTokens.colors.textMuted,
    },
    body1: {
      lineHeight: 1.55,
    },
    body2: {
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: designTokens.colors.background,
          color: designTokens.colors.textPrimary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: designTokens.shadows.card,
          border: `1px solid ${designTokens.colors.border}`,
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: designTokens.layout.inputHeight,
          backgroundColor: designTokens.colors.surface,
          transition: 'border-color 120ms ease, box-shadow 120ms ease',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.borderStrong,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.primary,
          },
          '&.Mui-focused': {
            boxShadow: designTokens.shadows.focus,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: designTokens.colors.primary,
            borderWidth: 1,
          },
        },
        input: {
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
          backgroundColor: designTokens.colors.surface,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${designTokens.colors.border}`,
          verticalAlign: 'top',
          paddingTop: 14,
          paddingBottom: 14,
        },
        head: {
          backgroundColor: designTokens.colors.backgroundAccent,
          fontWeight: 700,
          color: designTokens.colors.textPrimary,
        },
      },
    },
  },
})

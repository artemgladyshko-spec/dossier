import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#34516d',
    },
    secondary: {
      main: '#718096',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#18212b',
      secondary: '#5b6673',
    },
    divider: '#d7dde4',
    success: {
      main: '#2f7d4a',
    },
    warning: {
      main: '#b7791f',
    },
    error: {
      main: '#b5403c',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Segoe UI", "Arial", sans-serif',
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #d7dde4',
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
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #d7dde4',
          verticalAlign: 'top',
        },
        head: {
          backgroundColor: '#f7f9fb',
          fontWeight: 600,
        },
      },
    },
  },
})

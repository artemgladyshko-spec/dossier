import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import App from './App'
import { I18nProvider } from './shared/i18n/I18nProvider'
import { theme } from './shared/ui/theme/theme'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </I18nProvider>
  </React.StrictMode>,
)

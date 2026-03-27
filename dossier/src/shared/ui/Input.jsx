import { Box, TextField, Typography } from '@mui/material'
import { designTokens } from '@/shared/ui/theme/tokens'

export function Input({ label, value, onChange, error, helperText, ...props }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      <Typography sx={{ ...designTokens.typography.label, color: 'text.secondary' }}>{label}</Typography>
      <TextField
        value={value}
        error={error}
        helperText={helperText}
        onChange={(event) => onChange?.(event.target.value)}
        {...props}
      />
    </Box>
  )
}

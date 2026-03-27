import { Box, FormControl, FormHelperText, MenuItem, Select as MuiSelect, Typography } from '@mui/material'
import { designTokens } from '@/shared/ui/theme/tokens'

export function Select({ label, value, onChange, options, error, helperText }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      <Typography sx={{ ...designTokens.typography.label, color: 'text.secondary' }}>{label}</Typography>
      <FormControl error={error}>
        <MuiSelect value={value} displayEmpty onChange={(event) => onChange?.(event.target.value)}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      </FormControl>
    </Box>
  )
}

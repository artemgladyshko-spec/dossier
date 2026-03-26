import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material'

export function Select({ label, value, onChange, options, error, helperText }) {
  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} value={value} onChange={(event) => onChange?.(event.target.value)}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  )
}

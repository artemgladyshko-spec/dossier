import { TextField } from '@mui/material'

export function Input({ label, value, onChange, error, helperText, ...props }) {
  return (
    <TextField
      label={label}
      value={value}
      error={error}
      helperText={helperText}
      onChange={(event) => onChange?.(event.target.value)}
      {...props}
    />
  )
}

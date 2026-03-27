import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { designTokens } from '@/shared/ui/theme/tokens'

export function DatePicker({ label, value, onChange, error, helperText }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      <Typography sx={{ ...designTokens.typography.label, color: 'text.secondary' }}>{label}</Typography>
      <MuiDatePicker
        value={value ? dayjs(value) : null}
        onChange={(nextValue) => onChange?.(nextValue ? nextValue.format('YYYY-MM-DD') : '')}
        slotProps={{
          textField: {
            fullWidth: true,
            size: 'small',
            error,
            helperText,
          },
        }}
      />
    </Box>
  )
}

import dayjs from 'dayjs'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'

export function DatePicker({ label, value, onChange, error, helperText }) {
  return (
    <MuiDatePicker
      label={label}
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
  )
}

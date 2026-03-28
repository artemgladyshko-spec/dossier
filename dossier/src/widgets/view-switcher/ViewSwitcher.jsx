import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function ViewSwitcher({ views, value, onChange }) {
  const { t } = useI18n()

  return (
    <ToggleButtonGroup exclusive value={value} onChange={(_, nextValue) => nextValue && onChange(nextValue)} size="small">
      {views.map((view) => (
        <ToggleButton key={view.value} value={view.value}>
          {t(view.labelKey)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

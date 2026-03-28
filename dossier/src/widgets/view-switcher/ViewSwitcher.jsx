import { Box, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function ViewSwitcher({ views, value, onChange }) {
  const { t } = useI18n()
  const buttonSx = {
    px: 1.5,
    py: 0.75,
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 600,
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <ToggleButtonGroup
        exclusive
        value={value}
        onChange={(_, nextValue) => nextValue && onChange(nextValue)}
        size="small"
        sx={{
          '& .MuiToggleButton-root': buttonSx,
        }}
      >
        {views.map((view) => (
          <ToggleButton key={view.value} value={view.value} sx={buttonSx}>
            {t(view.labelKey)}
          </ToggleButton>
        ))}
        <Tooltip title={t('toolbar.collectInfoTooltip')} arrow>
          <ToggleButton value="collect-info" selected={false} sx={buttonSx}>
            {t('toolbar.collectInfo')}
          </ToggleButton>
        </Tooltip>
        <ToggleButton value="verification" selected={false} sx={buttonSx}>
          {t('toolbar.verification')}
        </ToggleButton>
        <ToggleButton value="analytics" selected={false} sx={buttonSx}>
          {t('toolbar.analytics')}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}

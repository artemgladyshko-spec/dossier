import { Box, Tab, Tabs } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function DossierTopTabs({ tabs, value, onChange }) {
  const { t } = useI18n()

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={(_, nextValue) => onChange(nextValue)}
        variant="scrollable"
        allowScrollButtonsMobile
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} value={tab.value} label={t(tab.labelKey)} />
        ))}
      </Tabs>
    </Box>
  )
}

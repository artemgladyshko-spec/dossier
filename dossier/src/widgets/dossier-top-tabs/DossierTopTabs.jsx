import { Box, Tab, Tabs } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function DossierTopTabs({ tabs, value, onChange }) {
  const { t } = useI18n()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        borderBottom: `1px solid ${designTokens.colors.border}`,
      }}
    >
      <Tabs
        value={value}
        onChange={(_, nextValue) => onChange(nextValue)}
        variant="scrollable"
        allowScrollButtonsMobile
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={{
          minHeight: 0,
          '& .MuiTabs-flexContainer': {
            alignItems: 'flex-end',
            gap: 0.5,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={t(tab.labelKey)}
            sx={{
              minHeight: 38,
              px: 1.5,
              py: 0.75,
              textTransform: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'text.secondary',
              borderTop: `1px solid ${designTokens.colors.border}`,
              borderLeft: `1px solid ${designTokens.colors.border}`,
              borderRight: `1px solid ${designTokens.colors.border}`,
              borderBottom: 'none',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
              bgcolor: designTokens.colors.backgroundAccent,
              '&.Mui-selected': {
                color: 'text.primary',
                bgcolor: designTokens.colors.surface,
                position: 'relative',
                mb: '-1px',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

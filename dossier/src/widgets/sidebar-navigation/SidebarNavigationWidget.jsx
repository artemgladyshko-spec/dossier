import { Box, Collapse, List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useI18n } from '@/shared/i18n/useI18n'
import { designTokens } from '@/shared/ui/theme/tokens'

export function SidebarNavigationWidget({ groups }) {
  const { t } = useI18n()
  const [expandedSections, setExpandedSections] = useState(
    () => Object.fromEntries(groups.map((group) => [group.id, true])),
  )
  const [activeItem, setActiveItem] = useState(groups[0]?.items[0]?.id ?? '')

  const toggleSection = (sectionId) => {
    setExpandedSections((current) => ({
      ...current,
      [sectionId]: !current[sectionId],
    }))
  }

  const scrollToSection = (sectionId) => {
    setActiveItem(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Paper
      component="aside"
      sx={{
        width: { xs: '100%', lg: 300 },
        borderLeft: 0,
        borderTop: 0,
        borderRadius: 0,
        position: { xs: 'relative', lg: 'sticky' },
        top: { xs: 'auto', lg: 73 },
        alignSelf: 'flex-start',
        height: { xs: 'auto', lg: 'calc(100vh - 73px)' },
        overflowY: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 'none',
      }}
    >
      <Box sx={{ p: { xs: 2, md: 3 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {t('sidebar.title')}
        </Typography>
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {groups.map((group) => (
            <Box
              key={group.id}
              sx={{
                border: 0,
                borderRadius: 0,
                overflow: 'hidden',
                bgcolor: 'background.paper',
              }}
            >
              <ListItemButton
                onClick={() => toggleSection(group.id)}
                sx={{
                  py: 1.5,
                  px: 1.75,
                  bgcolor: 'background.default',
                  '&:hover': { bgcolor: designTokens.colors.sidebarHover },
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {t(group.titleKey)}
                    </Typography>
                  }
                />
                <Typography variant="body2" color="text.secondary">
                  {expandedSections[group.id] ? '-' : '+'}
                </Typography>
              </ListItemButton>
              <Collapse in={expandedSections[group.id]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {group.items.map((item) => (
                    <ListItemButton
                      key={item.id}
                      selected={activeItem === item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        py: 1.25,
                        px: 2.25,
                        borderLeft: '3px solid transparent',
                        '&:hover': {
                          bgcolor: designTokens.colors.sidebarHover,
                        },
                        '&.Mui-selected': {
                          bgcolor: designTokens.colors.sidebarActive,
                          borderLeftColor: 'primary.main',
                        },
                        '&.Mui-selected:hover': {
                          bgcolor: designTokens.colors.sidebarActive,
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant="body2" color="text.secondary">
                            {t(item.labelKey)}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Box>
    </Paper>
  )
}

import { Box, Collapse, List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { useI18n } from '@/shared/i18n/useI18n'

export function SidebarNavigationWidget({ groups }) {
  const { t } = useI18n()
  const [expandedSections, setExpandedSections] = useState(
    () => Object.fromEntries(groups.map((group) => [group.id, true])),
  )

  const toggleSection = (sectionId) => {
    setExpandedSections((current) => ({
      ...current,
      [sectionId]: !current[sectionId],
    }))
  }

  const scrollToSection = (sectionId) => {
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
      }}
    >
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {t('sidebar.title')}
        </Typography>
        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {groups.map((group) => (
            <Box key={group.id} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
              <ListItemButton onClick={() => toggleSection(group.id)} sx={{ py: 1.25, px: 1.5, bgcolor: 'grey.50' }}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
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
                    <ListItemButton key={item.id} onClick={() => scrollToSection(item.id)} sx={{ py: 1.1, px: 2.25 }}>
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

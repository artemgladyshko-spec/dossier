import { Box, Paper, Typography } from '@mui/material'
import { designTokens } from '@/shared/ui/theme/tokens'

export function Card({ title, subtitle, children, id, action }) {
  return (
    <Paper
      id={id}
      sx={{
        p: designTokens.layout.cardPadding,
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, md: 3 },
        scrollMarginTop: 96,
        borderRadius: 3,
        boxShadow: designTokens.shadows.card,
        borderColor: designTokens.colors.border,
      }}
    >
      {(title || subtitle || action) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 2,
            pb: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            {title ? (
              <Typography variant="h6" sx={{ color: 'text.primary' }}>
                {title}
              </Typography>
            ) : null}
            {subtitle ? (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            ) : null}
          </Box>
          {action}
        </Box>
      )}
      {children}
    </Paper>
  )
}

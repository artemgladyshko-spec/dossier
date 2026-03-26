import { Box, Paper, Typography } from '@mui/material'

export function Card({ title, subtitle, children, id, action }) {
  return (
    <Paper
      id={id}
      sx={{
        p: { xs: 2, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        scrollMarginTop: 96,
      }}
    >
      {(title || subtitle || action) && (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {title ? <Typography variant="h6">{title}</Typography> : null}
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

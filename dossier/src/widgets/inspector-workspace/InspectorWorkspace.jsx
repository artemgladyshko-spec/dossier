import { Box } from '@mui/material'

export function InspectorWorkspace({ sidebar, header, toolbar, tabs, content, contentRef, onContentScroll }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '380px minmax(0, 1fr)' },
        minHeight: 'calc(100vh - 73px)',
      }}
    >
      <Box sx={{ minWidth: 0 }}>{sidebar}</Box>
      <Box
        sx={{
          minWidth: 0,
          overflow: 'hidden',
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: { xs: -24, md: -32 },
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            pb: 1,
            mx: { xs: -2, md: -4 },
            px: { xs: 2, md: 4 },
            background:
              'linear-gradient(180deg, rgba(238,243,247,0.98) 0%, rgba(238,243,247,0.96) 82%, rgba(238,243,247,0) 100%)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {header}
          {toolbar}
          {tabs}
        </Box>
        <Box
          ref={contentRef}
          onScroll={onContentScroll}
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            display: 'grid',
            gap: 2.5,
            pb: 1,
          }}
        >
          {content}
        </Box>
      </Box>
    </Box>
  )
}

import { Box, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function InspectorWorkspace({ sidebar, header, toolbar, tabs, content, contentRef, onContentScroll }) {
  const { t } = useI18n()

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
        ref={contentRef}
        onScroll={onContentScroll}
        sx={{
          minWidth: 0,
          overflowY: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('dossier.pageEyebrow')}
          </Typography>
          <Typography variant="h3">{t('dossier.pageTitle')}</Typography>
          <Typography variant="body1" color="text.secondary">
            {t('dossier.pageSubtitle')}
          </Typography>
        </Box>
        {header}
        {toolbar}
        {tabs}
        <Box sx={{ display: 'grid', gap: 2.5 }}>{content}</Box>
      </Box>
    </Box>
  )
}

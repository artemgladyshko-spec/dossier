import { Box, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function DossierTimeline({ items }) {
  const { t } = useI18n()

  if (!items.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        {t('timeline.empty')}
      </Typography>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((item, index) => (
        <Box key={item.id} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '160px minmax(0, 1fr)' }, gap: 2 }}>
          <Box sx={{ position: 'relative', pl: 2 }}>
            <Box sx={{ position: 'absolute', top: 2, left: 0, width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
            {index < items.length - 1 ? (
              <Box sx={{ position: 'absolute', top: 14, left: 4, width: 2, height: 'calc(100% + 16px)', bgcolor: 'divider' }} />
            ) : null}
            <Typography variant="body2" color="text.secondary">
              {item.date}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, pb: 1 }}>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {item.title}
            </Typography>
            {item.subtitle ? (
              <Typography variant="body2" color="text.secondary">
                {item.subtitle}
              </Typography>
            ) : null}
            {item.description ? (
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            ) : null}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

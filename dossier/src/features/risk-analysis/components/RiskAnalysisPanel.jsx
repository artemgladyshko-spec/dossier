import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

export function RiskAnalysisPanel({ riskAnalysis, levelColor, levels }) {
  const { t } = useI18n()

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.1fr 0.9fr' }, gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {t('risk.summary')}
        </Typography>
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Chip label={`${t('risk.score')}: ${riskAnalysis.score}`} variant="outlined" />
          <Chip
            label={`${t('risk.level')}: ${t(`risk.scale.${riskAnalysis.level}`)}`}
            variant="outlined"
            sx={{ color: levelColor, borderColor: levelColor, bgcolor: 'transparent' }}
          />
          <Chip label={`${t('risk.lastReview')}: ${riskAnalysis.lastReview}`} variant="outlined" />
        </Stack>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
          {levels.map((level) => {
            const isActive = level === riskAnalysis.level

            return (
              <Box
                key={level}
                sx={{
                  p: 1.25,
                  borderRadius: 2,
                  border: 1,
                  borderColor: isActive ? levelColor : 'divider',
                  bgcolor: isActive ? `${levelColor}14` : 'background.default',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: isActive ? 700 : 500, color: isActive ? levelColor : 'text.secondary' }}>
                  {t(`risk.scale.${level}`)}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {t('risk.watchpoints')}
        </Typography>
        <Divider />
        {riskAnalysis.flags.map((flagKey) => (
          <Box key={flagKey} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
            <Box sx={{ mt: 0.75, width: 8, height: 8, borderRadius: '50%', flexShrink: 0, bgcolor: levelColor }} />
            <Typography variant="body2" color="text.secondary">
              {t(`risk.flag.${flagKey}`)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

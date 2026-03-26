import { useMemo } from 'react'

const levelColors = {
  low: 'success.main',
  moderate: 'warning.main',
  high: '#c26b17',
  critical: 'error.main',
}

export function useRiskAnalysis(riskAnalysis) {
  return useMemo(
    () => ({
      levelColor: levelColors[riskAnalysis.level],
      levels: ['low', 'moderate', 'high', 'critical'],
    }),
    [riskAnalysis],
  )
}

export function selectPerformanceViewModel(dossier, t) {
  return {
    metrics: dossier.performance.metrics,
    periodColumns: [
      { key: 'period', label: t('common.period') },
      { key: 'workload', label: t('common.workload') },
      { key: 'efficiency', label: t('common.efficiency') },
      { key: 'quality', label: t('common.quality') },
    ],
    periodRows: dossier.performance.periods,
  }
}

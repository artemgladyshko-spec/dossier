export function selectPerformanceViewModel(dossier, t) {
  return {
    metrics: dossier.performance.metrics.map((item) => ({
      ...item,
      label: t(item.labelKey),
      value: item.valueKey ? t(item.valueKey) : item.value,
    })),
    periodColumns: [
      { key: 'period', label: t('common.period') },
      { key: 'workload', label: t('common.workload') },
      { key: 'efficiency', label: t('common.efficiency') },
      { key: 'quality', label: t('common.quality') },
    ],
    periodRows: dossier.performance.periods.map((item) => ({
      ...item,
      period: item.periodKey ? t(item.periodKey) : item.period,
      workload: item.workloadKey ? t(item.workloadKey) : item.workload,
      efficiency: t(item.efficiencyKey),
      quality: t(item.qualityKey),
    })),
  }
}

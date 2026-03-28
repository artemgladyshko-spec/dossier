export function selectEvaluationsViewModel(dossier, t) {
  return {
    columns: [
      { key: 'cycle', label: t('common.cycle') },
      { key: 'date', label: t('common.date') },
      { key: 'outcome', label: t('common.outcome') },
      { key: 'score', label: t('common.score') },
    ],
    rows: dossier.evaluations.records,
  }
}

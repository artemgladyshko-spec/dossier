export function selectDisciplinaryViewModel(dossier, t) {
  return {
    complaintColumns: [
      { key: 'date', label: t('common.date') },
      { key: 'source', label: t('common.source') },
      { key: 'subject', label: t('common.subject') },
      { key: 'status', label: t('common.status') },
    ],
    complaints: dossier.disciplinary.complaints,
    caseColumns: [
      { key: 'reference', label: t('common.reference') },
      { key: 'decision', label: t('common.result') },
      { key: 'date', label: t('common.date') },
    ],
    cases: dossier.disciplinary.cases,
  }
}

export function selectDisciplinaryViewModel(dossier, t) {
  return {
    complaintColumns: [
      { key: 'date', label: t('common.date') },
      { key: 'source', label: t('common.source') },
      { key: 'subject', label: t('common.subject') },
      { key: 'status', label: t('common.status') },
    ],
    complaints: dossier.disciplinary.complaints.map((item) => ({
      ...item,
      source: t(item.sourceKey),
      subject: t(item.subjectKey),
      status: t(item.statusKey),
    })),
    caseColumns: [
      { key: 'reference', label: t('common.reference') },
      { key: 'decision', label: t('common.result') },
      { key: 'date', label: t('common.date') },
    ],
    cases: dossier.disciplinary.cases.map((item) => ({
      ...item,
      decision: t(item.decisionKey),
    })),
  }
}

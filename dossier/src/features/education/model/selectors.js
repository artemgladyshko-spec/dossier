export function selectEducationViewModel(dossier, t) {
  return {
    columns: [
      { key: 'year', label: t('common.year') },
      { key: 'institution', label: t('common.title') },
      { key: 'degree', label: t('common.degree') },
      { key: 'specialization', label: t('common.specialization') },
    ],
    rows: dossier.education.records,
  }
}

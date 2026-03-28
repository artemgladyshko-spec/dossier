export function selectDocumentsViewModel(dossier, t) {
  return {
    registryColumns: [
      { key: 'date', label: t('common.date') },
      { key: 'title', label: t('common.title') },
      { key: 'documentNumber', label: t('common.reference') },
      { key: 'status', label: t('common.status') },
    ],
    registryRows: dossier.documents.registry.map((item) => ({
      ...item,
      title: t(item.titleKey),
      status: t(`documents.status.${item.status}`),
    })),
    decisions: dossier.documents.decisions.map((item) => ({
      ...item,
      title: t(item.titleKey),
    })),
  }
}

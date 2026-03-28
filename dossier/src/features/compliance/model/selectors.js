export function selectComplianceViewModel(dossier, t) {
  return {
    declarationColumns: [
      { key: 'year', label: t('common.year') },
      { key: 'status', label: t('common.status') },
      { key: 'note', label: t('common.note') },
    ],
    declarations: dossier.compliance.declarations,
    controlColumns: [
      { key: 'control', label: t('common.control') },
      { key: 'result', label: t('common.result') },
      { key: 'updatedAt', label: t('common.date') },
    ],
    controls: dossier.compliance.antiCorruption,
    riskFlags: dossier.compliance.riskFlags,
  }
}

export function selectComplianceViewModel(dossier, t) {
  return {
    declarationColumns: [
      { key: 'year', label: t('common.year') },
      { key: 'status', label: t('common.status') },
      { key: 'note', label: t('common.note') },
    ],
    declarations: dossier.compliance.declarations.map((item) => ({
      ...item,
      status: t(item.statusKey),
      note: t(item.noteKey),
    })),
    controlColumns: [
      { key: 'control', label: t('common.control') },
      { key: 'result', label: t('common.result') },
      { key: 'updatedAt', label: t('common.date') },
    ],
    controls: dossier.compliance.antiCorruption.map((item) => ({
      ...item,
      control: t(item.controlKey),
      result: t(item.resultKey),
    })),
    riskFlags: dossier.compliance.riskFlagKeys.map((key) => t(key)),
  }
}

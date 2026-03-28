export function selectCareerViewModel(dossier, t) {
  return {
    timelineItems: dossier.career.events.map((event) => ({
      id: event.id,
      date: event.date,
      title: `${t(event.positionKey)} / ${t(event.courtKey)}`,
      subtitle: t(`career.type.${event.type}`),
      description: t(event.summaryKey),
    })),
    courtHistory: dossier.career.courtHistory.map((item) => ({
      ...item,
      period: item.periodKey ? t(item.periodKey) : item.period,
      court: t(item.courtKey),
      chamber: t(item.chamberKey),
    })),
    roles: dossier.career.roles.map((item) => ({
      ...item,
      period: item.periodKey ? t(item.periodKey) : item.period,
      title: t(item.titleKey),
    })),
  }
}

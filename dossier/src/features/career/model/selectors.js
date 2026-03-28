export function selectCareerViewModel(dossier, t) {
  return {
    timelineItems: dossier.career.events.map((event) => ({
      id: event.id,
      date: event.date,
      title: `${event.position} · ${event.court}`,
      subtitle: t(`career.type.${event.type}`),
      description: event.summary,
    })),
    courtHistory: dossier.career.courtHistory,
    roles: dossier.career.roles,
  }
}

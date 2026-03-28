import { createUserModel } from '@/entities/user'

function mapSingleDossier(source) {
  return {
    id: source.profile.dossierId,
    profile: source.profile,
    user: createUserModel(source.profile),
    identity: source.identity,
    career: source.career,
    documents: source.documents,
    education: source.education,
    evaluations: source.evaluations,
    performance: source.performance,
    disciplinary: source.disciplinary,
    compliance: source.compliance,
    materials: source.materials,
  }
}

export function mapDossierPortfolioSource(source) {
  const dossiers = source.assignedJudges.map(mapSingleDossier)

  return {
    dossiers,
  }
}

export function selectHeaderProfile(dossier) {
  return dossier.profile
}

export function selectAssignedJudges(portfolio) {
  return portfolio.dossiers.map((dossier) => ({
    id: dossier.id,
    fullName: [dossier.profile.lastName, dossier.profile.firstName, dossier.profile.middleName].join(' '),
    positionKey: dossier.profile.positionKey,
    courtKey: dossier.profile.departmentKey,
    registryCase: dossier.profile.registryCase,
    status: dossier.profile.status,
    courtLevel: dossier.profile.courtLevel,
    jurisdiction: dossier.profile.jurisdiction,
    regionKey: dossier.profile.regionKey,
    activeCases: dossier.profile.activeCases,
    lastActivity: dossier.profile.lastActivity,
  }))
}

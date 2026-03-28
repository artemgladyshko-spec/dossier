import { createUserModel } from '@/entities/user'

export function mapDossierSourceToEntity(source) {
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
  }
}

export function selectHeaderProfile(dossier) {
  return dossier.profile
}

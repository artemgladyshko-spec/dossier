import { createUserModel } from '@/entities/user'

export function mapDossierSourceToEntity(source) {
  return {
    id: source.profile.dossierId,
    profile: source.profile,
    user: createUserModel(source.profile),
    personalInfo: source.personalInfo,
    address: source.address,
    passport: source.passport,
    contacts: source.contacts,
    education: source.education,
    registryHistory: source.registryHistory,
    riskAnalysis: source.riskAnalysis,
  }
}

export function selectPersonalInfoSections(dossier) {
  return {
    personalInfo: dossier.personalInfo,
    address: dossier.address,
    passport: dossier.passport,
    contacts: dossier.contacts,
    education: dossier.education,
  }
}

export function selectHeaderProfile(dossier) {
  return dossier.profile
}

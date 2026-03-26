import { dossierSource } from './dossierSource'
import { mapDossierSourceToEntity } from './mappers'

export const DossierEntity = mapDossierSourceToEntity(dossierSource)

export const dossierNavigationGroups = [
  {
    id: 'identity',
    titleKey: 'sidebar.identity',
    items: [
      { id: 'profile-header', labelKey: 'sidebar.profileHeader' },
      { id: 'personal-info', labelKey: 'sidebar.personalInfo' },
      { id: 'address', labelKey: 'sidebar.address' },
      { id: 'passport', labelKey: 'sidebar.passport' },
      { id: 'contacts', labelKey: 'sidebar.contacts' },
      { id: 'education', labelKey: 'sidebar.education' },
    ],
  },
  {
    id: 'records',
    titleKey: 'sidebar.records',
    items: [{ id: 'registry-history', labelKey: 'sidebar.registryHistory' }],
  },
  {
    id: 'assessment',
    titleKey: 'sidebar.assessment',
    items: [{ id: 'risk-analysis', labelKey: 'sidebar.riskAnalysis' }],
  },
]

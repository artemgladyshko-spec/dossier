import { dossierSource } from './dossierSource'
import { mapDossierSourceToEntity } from './mappers'

export const DossierEntity = mapDossierSourceToEntity(dossierSource)

export const dossierNavigationGroups = [
  {
    id: 'dossier-core',
    titleKey: 'sidebar.group.core',
    items: [
      { id: 'identity', labelKey: 'sidebar.identity' },
      { id: 'career', labelKey: 'sidebar.career' },
      { id: 'documents', labelKey: 'sidebar.documents' },
      { id: 'education', labelKey: 'sidebar.education' },
    ],
  },
  {
    id: 'dossier-oversight',
    titleKey: 'sidebar.group.oversight',
    items: [
      { id: 'evaluations', labelKey: 'sidebar.evaluations' },
      { id: 'performance', labelKey: 'sidebar.performance' },
      { id: 'disciplinary', labelKey: 'sidebar.disciplinary' },
      { id: 'compliance', labelKey: 'sidebar.compliance' },
    ],
  },
]

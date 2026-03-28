import { dossierPortfolioSource } from './dossierSource'
import { mapDossierPortfolioSource } from './mappers'

export const dossierPortfolio = mapDossierPortfolioSource(dossierPortfolioSource)

export const inspectorStatusFilters = [
  { value: 'all', labelKey: 'portfolio.filter.status.all' },
  { value: 'in_progress', labelKey: 'portfolio.status.in_progress' },
  { value: 'completed', labelKey: 'portfolio.status.completed' },
  { value: 'new', labelKey: 'portfolio.status.new' },
]

export const inspectorCourtLevelFilters = [
  { value: 'all', labelKey: 'portfolio.filter.courtLevel.all' },
  { value: 'local', labelKey: 'portfolio.courtLevel.local' },
  { value: 'appeal', labelKey: 'portfolio.courtLevel.appeal' },
  { value: 'higher', labelKey: 'portfolio.courtLevel.higher' },
  { value: 'supreme', labelKey: 'portfolio.courtLevel.supreme' },
]

export const inspectorJurisdictionFilters = [
  { value: 'all', labelKey: 'portfolio.filter.jurisdiction.all' },
  { value: 'general', labelKey: 'portfolio.jurisdiction.general' },
  { value: 'administrative', labelKey: 'portfolio.jurisdiction.administrative' },
  { value: 'commercial', labelKey: 'portfolio.jurisdiction.commercial' },
]

export const inspectorCourtGroups = [
  { value: 'local', labelKey: 'portfolio.group.local' },
  { value: 'appeal', labelKey: 'portfolio.group.appeal' },
  { value: 'higher', labelKey: 'portfolio.group.higher' },
  { value: 'supreme', labelKey: 'portfolio.group.supreme' },
]

export const dossierTabs = [
  { value: 'general', labelKey: 'tabs.general' },
  { value: 'career', labelKey: 'tabs.career' },
  { value: 'evaluations', labelKey: 'tabs.evaluations' },
  { value: 'disciplinary', labelKey: 'tabs.disciplinary' },
  { value: 'compliance', labelKey: 'tabs.compliance' },
]

export const dossierViews = [
  { value: 'dossier', labelKey: 'view.dossier' },
  { value: 'materials', labelKey: 'view.materials' },
]

import { selectComplianceViewModel } from '../model/selectors'

export function useCompliance(dossier, t) {
  return selectComplianceViewModel(dossier, t)
}

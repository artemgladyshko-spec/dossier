import { selectEvaluationsViewModel } from '../model/selectors'

export function useEvaluations(dossier, t) {
  return selectEvaluationsViewModel(dossier, t)
}

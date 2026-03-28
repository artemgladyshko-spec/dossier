import { selectPerformanceViewModel } from '../model/selectors'

export function usePerformance(dossier, t) {
  return selectPerformanceViewModel(dossier, t)
}

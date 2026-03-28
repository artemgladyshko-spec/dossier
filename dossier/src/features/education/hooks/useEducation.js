import { selectEducationViewModel } from '../model/selectors'

export function useEducation(dossier, t) {
  return selectEducationViewModel(dossier, t)
}

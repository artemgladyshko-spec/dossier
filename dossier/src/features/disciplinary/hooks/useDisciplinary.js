import { selectDisciplinaryViewModel } from '../model/selectors'

export function useDisciplinary(dossier, t) {
  return selectDisciplinaryViewModel(dossier, t)
}

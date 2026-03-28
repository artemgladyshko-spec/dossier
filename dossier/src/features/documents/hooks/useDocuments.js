import { selectDocumentsViewModel } from '../model/selectors'

export function useDocuments(dossier, t) {
  return selectDocumentsViewModel(dossier, t)
}

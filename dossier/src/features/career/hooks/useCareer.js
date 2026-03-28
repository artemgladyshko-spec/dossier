import { useI18n } from '@/shared/i18n/useI18n'
import { selectCareerViewModel } from '../model/selectors'

export function useCareer(dossier) {
  const { t } = useI18n()
  return selectCareerViewModel(dossier, t)
}

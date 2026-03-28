import { useI18n } from '@/shared/i18n/useI18n'
import { selectIdentityDetails } from '../model/selectors'

export function useIdentity(dossier) {
  const { t } = useI18n()
  return selectIdentityDetails(dossier, t)
}

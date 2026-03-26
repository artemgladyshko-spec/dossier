import { useMemo, useState } from 'react'
import { selectPersonalInfoSections } from '@/entities/dossier'
import { isEmail, isRequired } from '@/shared/lib/validation'

export function usePersonalInfoForm(dossier) {
  const [formState, setFormState] = useState(() => selectPersonalInfoSections(dossier))

  const updateSection = (section, field, value) => {
    setFormState((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }))
  }

  const errors = useMemo(
    () => ({
      personalInfo: {
        firstName: !isRequired(formState.personalInfo.firstName),
        lastName: !isRequired(formState.personalInfo.lastName),
        taxId: !isRequired(formState.personalInfo.taxId),
      },
      contacts: {
        email: !isEmail(formState.contacts.email),
      },
      education: {
        institution: !isRequired(formState.education.institution),
      },
    }),
    [formState],
  )

  return {
    formState,
    errors,
    updateSection,
  }
}

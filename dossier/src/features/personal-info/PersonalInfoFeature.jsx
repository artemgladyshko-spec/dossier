import { AddressSection } from './components/AddressSection'
import { ContactsSection } from './components/ContactsSection'
import { EducationSection } from './components/EducationSection'
import { PassportSection } from './components/PassportSection'
import { PersonalInfoSection } from './components/PersonalInfoSection'
import { usePersonalInfoForm } from './hooks/usePersonalInfoForm'

export function PersonalInfoFeature({ dossier }) {
  const { formState, errors, updateSection } = usePersonalInfoForm(dossier)

  return (
    <>
      <PersonalInfoSection
        data={formState.personalInfo}
        errors={errors.personalInfo}
        onChange={(field, value) => updateSection('personalInfo', field, value)}
      />
      <AddressSection data={formState.address} onChange={(field, value) => updateSection('address', field, value)} />
      <PassportSection data={formState.passport} onChange={(field, value) => updateSection('passport', field, value)} />
      <ContactsSection
        data={formState.contacts}
        errors={errors.contacts}
        onChange={(field, value) => updateSection('contacts', field, value)}
      />
      <EducationSection
        data={formState.education}
        errors={errors.education}
        onChange={(field, value) => updateSection('education', field, value)}
      />
    </>
  )
}

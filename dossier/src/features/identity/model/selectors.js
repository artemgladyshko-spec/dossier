export function selectIdentityDetails(dossier, t) {
  return {
    personal: [
      { label: t('field.birthDate'), value: dossier.identity.personalInfo.birthDate },
      { label: t('field.gender'), value: t(dossier.identity.personalInfo.genderKey) },
      { label: t('field.taxId'), value: dossier.identity.personalInfo.taxId },
      { label: t('field.citizenship'), value: t(dossier.identity.personalInfo.citizenshipKey) },
      { label: t('identity.address'), value: t(dossier.identity.personalInfo.registeredAddressKey) },
    ],
    passport: [
      { label: t('field.passportSeries'), value: dossier.identity.passport.series },
      { label: t('field.passportNumber'), value: dossier.identity.passport.number },
      { label: t('field.issuedBy'), value: t(dossier.identity.passport.issuedByKey) },
      { label: t('field.issueDate'), value: dossier.identity.passport.issueDate },
      { label: t('field.expiryDate'), value: dossier.identity.passport.expiryDate },
    ],
    contacts: [
      { label: t('field.phone'), value: dossier.identity.contacts.phone },
      { label: t('field.email'), value: dossier.identity.contacts.email },
      {
        label: t('field.emergencyContact'),
        value: dossier.identity.contacts.emergencyContactKey
          ? t(dossier.identity.contacts.emergencyContactKey)
          : dossier.identity.contacts.emergencyContact,
      },
    ],
  }
}

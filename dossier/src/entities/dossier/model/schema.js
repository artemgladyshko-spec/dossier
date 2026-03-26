export const dossierSchema = {
  profile: ['photo', 'firstName', 'lastName', 'middleName', 'position', 'department', 'dossierId', 'registryCase', 'status'],
  personalInfo: ['firstName', 'lastName', 'middleName', 'birthDate', 'gender', 'taxId', 'citizenship'],
  address: ['country', 'region', 'city', 'street', 'postalCode'],
  passport: ['series', 'number', 'issuedBy', 'issueDate', 'expiryDate'],
  contacts: ['phone', 'email', 'emergencyContact'],
  education: ['degree', 'institution', 'specialization', 'graduationYear', 'studyForm'],
}

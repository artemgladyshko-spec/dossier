export const dossierSchema = {
  profile: ['photo', 'firstName', 'lastName', 'middleName', 'position', 'department', 'dossierId', 'registryCase', 'status'],
  identity: ['personalInfo', 'passport', 'contacts'],
  career: ['events', 'courtHistory', 'roles'],
  documents: ['registry', 'decisions'],
  education: ['records'],
  evaluations: ['records'],
  performance: ['metrics', 'periods'],
  disciplinary: ['complaints', 'cases'],
  compliance: ['declarations', 'antiCorruption', 'riskFlags'],
  materials: ['general', 'career', 'documents', 'evaluations', 'performance', 'disciplinary', 'compliance'],
}

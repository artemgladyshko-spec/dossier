export const dossierSource = {
  profile: {
    photo: '',
    firstName: 'Olena',
    lastName: 'Kravets',
    middleName: 'Mykhailivna',
    position: 'Judge of the Civil Chamber',
    department: 'Kyiv Court of Appeal',
    dossierId: 'JD-24-1187',
    registryCase: 'RC-2026-04-771',
    status: 'active',
  },
  identity: {
    personalInfo: {
      birthDate: '1982-07-14',
      gender: 'female',
      taxId: '2894417621',
      citizenship: 'Ukraine',
      registeredAddress: '11 Prorizna Street, Apt. 24, Kyiv, 01001',
    },
    passport: {
      series: 'MK',
      number: '483921',
      issuedBy: 'State Migration Service of Ukraine, Kyiv Unit',
      issueDate: '2017-05-12',
      expiryDate: '2027-05-12',
    },
    contacts: {
      phone: '+380 67 555 41 22',
      email: 'o.kravets@judiciary.gov.ua',
      emergencyContact: 'Roman Kravets, +380 50 908 11 38',
    },
  },
  career: {
    events: [
      {
        id: 'career-1',
        type: 'appointment',
        date: '2023-09-01',
        court: 'Kyiv Court of Appeal',
        position: 'Judge of the Civil Chamber',
        summary: 'Transferred after successful appellate qualification review.',
      },
      {
        id: 'career-2',
        type: 'promotion',
        date: '2018-05-22',
        court: 'Shevchenkivskyi District Court of Kyiv',
        position: 'Senior Judge',
        summary: 'Appointed to lead complex civil disputes panel.',
      },
      {
        id: 'career-3',
        type: 'appointment',
        date: '2011-11-14',
        court: 'Shevchenkivskyi District Court of Kyiv',
        position: 'Judge',
        summary: 'First judicial appointment after probationary service.',
      },
    ],
    courtHistory: [
      { id: 'court-1', court: 'Kyiv Court of Appeal', period: '2023-present', chamber: 'Civil Chamber' },
      { id: 'court-2', court: 'Shevchenkivskyi District Court of Kyiv', period: '2011-2023', chamber: 'Civil Division' },
    ],
    roles: [
      { id: 'role-1', title: 'Mentor for newly appointed judges', period: '2024-present' },
      { id: 'role-2', title: 'Member of internal ethics committee', period: '2021-2023' },
    ],
  },
  documents: {
    registry: [
      {
        id: 'doc-1',
        type: 'qualification_order',
        title: 'Annual qualification review order',
        documentNumber: 'QA-18/2026',
        date: '2026-02-18',
        status: 'active',
      },
      {
        id: 'doc-2',
        type: 'asset_addendum',
        title: 'Asset declaration addendum',
        documentNumber: '4A-9931',
        date: '2025-11-03',
        status: 'archived',
      },
      {
        id: 'doc-3',
        type: 'disciplinary_file',
        title: 'Archived disciplinary file',
        documentNumber: 'DP-07-221',
        date: '2025-06-26',
        status: 'closed',
      },
    ],
    decisions: [
      { id: 'decision-1', title: 'Integrity screening conclusion', file: 'IS-2025-14', date: '2025-12-11' },
      { id: 'decision-2', title: 'Panel workload allocation decision', file: 'PW-2024-61', date: '2024-08-09' },
    ],
  },
  education: {
    records: [
      {
        id: 'edu-1',
        institution: 'Taras Shevchenko National University of Kyiv',
        degree: 'Master of Laws',
        specialization: 'Judicial administration and civil procedure',
        year: '2004',
      },
      {
        id: 'edu-2',
        institution: 'National School of Judges of Ukraine',
        degree: 'Continuous judicial training',
        specialization: 'Ethics, anti-corruption and digital evidence',
        year: '2024',
      },
    ],
  },
  evaluations: {
    records: [
      { id: 'eval-1', cycle: 'Qualification', date: '2026-02-18', outcome: 'Confirmed', score: '91/100' },
      { id: 'eval-2', cycle: 'Regular review', date: '2024-12-06', outcome: 'Confirmed', score: '88/100' },
    ],
  },
  performance: {
    metrics: [
      { id: 'metric-1', label: 'Resolved cases', value: '418', period: '2025' },
      { id: 'metric-2', label: 'Average resolution time', value: '42 days', period: '2025' },
      { id: 'metric-3', label: 'Appeal overturn rate', value: '6.8%', period: '2025' },
    ],
    periods: [
      { id: 'perf-1', period: 'Q4 2025', workload: '108 cases', efficiency: 'High', quality: 'Stable' },
      { id: 'perf-2', period: 'Q3 2025', workload: '101 cases', efficiency: 'High', quality: 'Stable' },
    ],
  },
  disciplinary: {
    complaints: [
      { id: 'disc-1', date: '2025-04-02', source: 'Citizen complaint', subject: 'Delay in publication of full text', status: 'Closed' },
      { id: 'disc-2', date: '2023-11-18', source: 'Bar association inquiry', subject: 'Alleged conflict during hearing schedule', status: 'Dismissed' },
    ],
    cases: [
      { id: 'case-1', reference: 'DP-07-221', decision: 'No misconduct established', date: '2025-06-26' },
    ],
  },
  compliance: {
    declarations: [
      { id: 'comp-1', year: '2025', status: 'Submitted', note: 'Verified with minor clarification request' },
      { id: 'comp-2', year: '2024', status: 'Submitted', note: 'Verified' },
    ],
    antiCorruption: [
      { id: 'anti-1', control: 'Conflict-of-interest screening', result: 'No unresolved findings', updatedAt: '2026-01-12' },
      { id: 'anti-2', control: 'Lifestyle monitoring', result: 'Under standard monitoring', updatedAt: '2025-12-02' },
    ],
    riskFlags: [
      'Asset declarations need reconciliation with registry updates.',
      'Several public-interest proceedings increased media exposure.',
      'Historical disciplinary record remains under monitoring.',
    ],
  },
}

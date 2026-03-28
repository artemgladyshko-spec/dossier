import { createDocument } from '@/entities/document'

function createJudgeDossier(overrides) {
  return {
    profile: {
      photo: '',
      firstName: 'Олена',
      lastName: 'Кравець',
      middleName: 'Михайлівна',
      positionKey: 'data.position.civilJudge',
      departmentKey: 'data.court.kyivAppeal',
      dossierId: 'JD-24-1187',
      registryCase: 'RC-2026-04-771',
      status: 'in_progress',
      courtLevel: 'appeal',
      jurisdiction: 'general',
      regionKey: 'data.region.kyiv',
      activeCases: 3,
      lastActivity: '2026-03-24',
      ...overrides.profile,
    },
    identity: {
      personalInfo: {
        birthDate: '1982-07-14',
        genderKey: 'data.gender.female',
        taxId: '2894417621',
        citizenshipKey: 'data.citizenship.ukraine',
        registeredAddressKey: 'data.address.kyivProrizna',
        ...(overrides.identity?.personalInfo ?? {}),
      },
      passport: {
        series: 'MK',
        number: '483921',
        issuedByKey: 'data.authority.smsKyiv',
        issueDate: '2017-05-12',
        expiryDate: '2027-05-12',
        ...(overrides.identity?.passport ?? {}),
      },
      contacts: {
        phone: '+380 67 555 41 22',
        email: 'o.kravets@judiciary.gov.ua',
        emergencyContactKey: 'data.contact.romanKravets',
        ...(overrides.identity?.contacts ?? {}),
      },
    },
    career: {
      events: [
        {
          id: `${overrides.profile.dossierId}-career-1`,
          type: 'appointment',
          date: '2023-09-01',
          courtKey: overrides.profile.departmentKey,
          positionKey: overrides.profile.positionKey,
          summaryKey: 'data.career.summary.transferAppeal',
        },
        {
          id: `${overrides.profile.dossierId}-career-2`,
          type: 'promotion',
          date: '2018-05-22',
          courtKey: 'data.court.shevchenkivskyi',
          positionKey: 'data.position.seniorJudge',
          summaryKey: 'data.career.summary.panelLead',
        },
      ],
      courtHistory: [
        {
          id: `${overrides.profile.dossierId}-court-1`,
          courtKey: overrides.profile.departmentKey,
          periodKey: 'data.period.2023Present',
          chamberKey: 'data.chamber.civil',
        },
        {
          id: `${overrides.profile.dossierId}-court-2`,
          courtKey: 'data.court.shevchenkivskyi',
          periodKey: 'data.period.20112023',
          chamberKey: 'data.chamber.civilDivision',
        },
      ],
      roles: [
        { id: `${overrides.profile.dossierId}-role-1`, titleKey: 'data.role.mentor', periodKey: 'data.period.2024Present' },
        { id: `${overrides.profile.dossierId}-role-2`, titleKey: 'data.role.ethicsMember', periodKey: 'data.period.20212023' },
      ],
    },
    documents: {
      registry: [
        {
          id: `${overrides.profile.dossierId}-doc-1`,
          type: 'qualification_order',
          titleKey: 'data.document.qualificationReviewOrder',
          documentNumber: 'QA-18/2026',
          date: '2026-02-18',
          status: 'active',
        },
        {
          id: `${overrides.profile.dossierId}-doc-2`,
          type: 'asset_addendum',
          titleKey: 'data.document.assetDeclarationAddendum',
          documentNumber: '4A-9931',
          date: '2025-11-03',
          status: 'archived',
        },
      ],
      decisions: [
        { id: `${overrides.profile.dossierId}-decision-1`, titleKey: 'data.document.integrityConclusion', file: 'IS-2025-14', date: '2025-12-11' },
      ],
    },
    education: {
      records: [
        {
          id: `${overrides.profile.dossierId}-edu-1`,
          institutionKey: 'data.institution.knu',
          degreeKey: 'data.degree.llm',
          specializationKey: 'data.specialization.judicialAdministration',
          year: '2004',
        },
      ],
    },
    evaluations: {
      records: [
        { id: `${overrides.profile.dossierId}-eval-1`, cycleKey: 'data.evaluationCycle.qualification', date: '2026-02-18', outcomeKey: 'data.outcome.confirmed', score: '91/100' },
        { id: `${overrides.profile.dossierId}-eval-2`, cycleKey: 'data.evaluationCycle.regular', date: '2024-12-06', outcomeKey: 'data.outcome.confirmed', score: '88/100' },
      ],
    },
    performance: {
      metrics: [
        { id: `${overrides.profile.dossierId}-metric-1`, labelKey: 'data.metric.resolvedCases', value: '418', period: '2025' },
        { id: `${overrides.profile.dossierId}-metric-2`, labelKey: 'data.metric.averageResolutionTime', valueKey: 'data.value.days42', period: '2025' },
        { id: `${overrides.profile.dossierId}-metric-3`, labelKey: 'data.metric.appealOverturnRate', value: '6.8%', period: '2025' },
      ],
      periods: [
        { id: `${overrides.profile.dossierId}-perf-1`, periodKey: 'data.period.q42025', workloadKey: 'data.workload.cases108', efficiencyKey: 'data.performance.high', qualityKey: 'data.performance.stable' },
      ],
    },
    disciplinary: {
      complaints: [
        { id: `${overrides.profile.dossierId}-disc-1`, date: '2025-04-02', sourceKey: 'data.source.citizenComplaint', subjectKey: 'data.subject.publicationDelay', statusKey: 'data.status.closed' },
      ],
      cases: [
        { id: `${overrides.profile.dossierId}-case-1`, reference: 'DP-07-221', decisionKey: 'data.result.noMisconduct', date: '2025-06-26' },
      ],
    },
    compliance: {
      declarations: [
        { id: `${overrides.profile.dossierId}-comp-1`, year: '2025', statusKey: 'data.status.submitted', noteKey: 'data.note.verifiedClarification' },
      ],
      antiCorruption: [
        { id: `${overrides.profile.dossierId}-anti-1`, controlKey: 'data.control.conflictScreening', resultKey: 'data.result.noFindings', updatedAt: '2026-01-12' },
      ],
      riskFlagKeys: ['data.risk.assetMismatch', 'data.risk.mediaExposure'],
    },
    materials: {
      general: [
        createDocument({
          id: `${overrides.profile.dossierId}-mat-general-1`,
          titleKey: 'data.material.personalIdentificationExtract',
          section: 'general',
          kind: 'generated',
          createdAt: '2026-02-10',
          source: 'generated',
        }),
      ],
      career: [
        createDocument({
          id: `${overrides.profile.dossierId}-mat-career-1`,
          titleKey: 'data.material.careerAppointmentOrder',
          section: 'career',
          kind: 'uploaded',
          createdAt: '2025-12-02',
          source: 'uploaded',
        }),
      ],
      documents: [
        createDocument({
          id: `${overrides.profile.dossierId}-mat-doc-1`,
          titleKey: 'data.material.qualificationPackage',
          section: 'documents',
          kind: 'uploaded',
          createdAt: '2026-02-18',
          source: 'uploaded',
        }),
      ],
      evaluations: [],
      performance: [],
      disciplinary: [],
      compliance: [],
    },
  }
}

export const dossierPortfolioSource = {
  assignedJudges: [
    createJudgeDossier({
      profile: {
        firstName: 'Олена',
        lastName: 'Кравець',
        middleName: 'Михайлівна',
        positionKey: 'data.position.civilJudge',
        departmentKey: 'data.court.kyivAppeal',
        dossierId: 'JD-24-1187',
        registryCase: 'RC-2026-04-771',
        status: 'in_progress',
        courtLevel: 'appeal',
        jurisdiction: 'general',
        regionKey: 'data.region.kyiv',
        activeCases: 3,
        lastActivity: '2026-03-24',
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Андрій',
        lastName: 'Мельник',
        middleName: 'Сергійович',
        positionKey: 'data.position.investigatingJudge',
        departmentKey: 'data.court.pecherskyi',
        dossierId: 'JD-24-0922',
        registryCase: 'RC-2026-03-512',
        status: 'new',
        courtLevel: 'local',
        jurisdiction: 'general',
        regionKey: 'data.region.kyiv',
        activeCases: 1,
        lastActivity: '2026-03-27',
      },
      identity: {
        contacts: {
          phone: '+380 50 218 99 41',
          email: 'a.melnyk@court.gov.ua',
          emergencyContactKey: 'data.contact.irynaMelnyk',
        },
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Світлана',
        lastName: 'Бондар',
        middleName: 'Олександрівна',
        positionKey: 'data.position.adminJudge',
        departmentKey: 'data.court.sixthAdminAppeal',
        dossierId: 'JD-24-1441',
        registryCase: 'RC-2026-05-118',
        status: 'in_progress',
        courtLevel: 'appeal',
        jurisdiction: 'administrative',
        regionKey: 'data.region.kyiv',
        activeCases: 5,
        lastActivity: '2026-03-22',
      },
      compliance: {
        riskFlagKeys: ['data.risk.conflictScreening', 'data.risk.assetMismatch'],
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Ірина',
        lastName: 'Савчук',
        middleName: 'Петрівна',
        positionKey: 'data.position.civilJudge',
        departmentKey: 'data.court.lvivDistrict',
        dossierId: 'JD-24-1559',
        registryCase: 'RC-2026-05-771',
        status: 'completed',
        courtLevel: 'local',
        jurisdiction: 'general',
        regionKey: 'data.region.lviv',
        activeCases: 0,
        lastActivity: '2026-02-18',
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Тарас',
        lastName: 'Гнатюк',
        middleName: 'Ігорович',
        positionKey: 'data.position.commercialJudge',
        departmentKey: 'data.court.odesaCommercial',
        dossierId: 'JD-24-1613',
        registryCase: 'RC-2026-06-019',
        status: 'in_progress',
        courtLevel: 'local',
        jurisdiction: 'commercial',
        regionKey: 'data.region.odesa',
        activeCases: 4,
        lastActivity: '2026-03-25',
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Микола',
        lastName: 'Романюк',
        middleName: 'Васильович',
        positionKey: 'data.position.seniorJudge',
        departmentKey: 'data.court.highAntiCorruption',
        dossierId: 'JD-24-1704',
        registryCase: 'RC-2026-06-203',
        status: 'new',
        courtLevel: 'higher',
        jurisdiction: 'general',
        regionKey: 'data.region.kyiv',
        activeCases: 2,
        lastActivity: '2026-03-26',
      },
    }),
    createJudgeDossier({
      profile: {
        firstName: 'Людмила',
        lastName: 'Коваль',
        middleName: 'Іванівна',
        positionKey: 'data.position.supremeJudge',
        departmentKey: 'data.court.supremeCourt',
        dossierId: 'JD-24-1807',
        registryCase: 'RC-2026-07-044',
        status: 'completed',
        courtLevel: 'supreme',
        jurisdiction: 'general',
        regionKey: 'data.region.kyiv',
        activeCases: 1,
        lastActivity: '2026-03-10',
      },
    }),
  ],
}

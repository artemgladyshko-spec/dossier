import { CareerTimeline } from '@/features/career'
import { ComplianceSection } from '@/features/compliance'
import { DisciplinarySection } from '@/features/disciplinary'
import { DocumentRegistry } from '@/features/documents'
import { EducationSection } from '@/features/education'
import { EvaluationsTable } from '@/features/evaluations'
import { IdentitySection } from '@/features/identity'
import { PerformanceMetrics } from '@/features/performance'

export function DossierAnalyticsView({ dossier, selectedTab, onViewMaterials }) {
  const sharedProps = { dossier, onViewMaterials }

  const tabContent = {
    general: (
      <>
        <IdentitySection {...sharedProps} materialSection="general" />
        <DocumentRegistry {...sharedProps} materialSection="documents" />
        <EducationSection {...sharedProps} materialSection="general" />
      </>
    ),
    career: <CareerTimeline {...sharedProps} materialSection="career" />,
    evaluations: (
      <>
        <EvaluationsTable {...sharedProps} materialSection="evaluations" />
        <PerformanceMetrics {...sharedProps} materialSection="performance" />
      </>
    ),
    disciplinary: <DisciplinarySection {...sharedProps} materialSection="disciplinary" />,
    compliance: <ComplianceSection {...sharedProps} materialSection="compliance" />,
  }

  return tabContent[selectedTab]
}

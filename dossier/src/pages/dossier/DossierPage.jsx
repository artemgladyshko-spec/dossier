import { DossierEntity, dossierNavigationGroups, selectHeaderProfile } from '@/entities/dossier'
import { CareerTimeline } from '@/features/career'
import { ComplianceSection } from '@/features/compliance'
import { DisciplinarySection } from '@/features/disciplinary'
import { DocumentRegistry } from '@/features/documents'
import { EducationSection } from '@/features/education'
import { EvaluationsTable } from '@/features/evaluations'
import { IdentitySection } from '@/features/identity'
import { PerformanceMetrics } from '@/features/performance'
import { DossierLayoutWidget } from '@/widgets/dossier-layout'
import { DossierHeader } from '@/widgets/dossier-header'
import { DossierSidebar } from '@/widgets/dossier-sidebar'

export function DossierPage() {
  return (
    <DossierLayoutWidget
      sidebar={<DossierSidebar groups={dossierNavigationGroups} />}
      header={<DossierHeader profile={selectHeaderProfile(DossierEntity)} />}
    >
      <IdentitySection dossier={DossierEntity} />
      <CareerTimeline dossier={DossierEntity} />
      <DocumentRegistry dossier={DossierEntity} />
      <EducationSection dossier={DossierEntity} />
      <EvaluationsTable dossier={DossierEntity} />
      <PerformanceMetrics dossier={DossierEntity} />
      <DisciplinarySection dossier={DossierEntity} />
      <ComplianceSection dossier={DossierEntity} />
    </DossierLayoutWidget>
  )
}

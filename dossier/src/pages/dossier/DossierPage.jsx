import { DossierEntity, dossierNavigationGroups, selectHeaderProfile } from '@/entities/dossier'
import { PersonalInfoFeature } from '@/features/personal-info'
import { RegistryHistoryFeature } from '@/features/registry-history'
import { RiskAnalysisFeature } from '@/features/risk-analysis'
import { DossierLayoutWidget } from '@/widgets/dossier-layout'
import { HeaderProfileWidget } from '@/widgets/header-profile'
import { SidebarNavigationWidget } from '@/widgets/sidebar-navigation'

export function DossierPage() {
  return (
    <DossierLayoutWidget
      sidebar={<SidebarNavigationWidget groups={dossierNavigationGroups} />}
      header={<HeaderProfileWidget profile={selectHeaderProfile(DossierEntity)} />}
    >
      <PersonalInfoFeature dossier={DossierEntity} />
      <RegistryHistoryFeature records={DossierEntity.registryHistory} />
      <RiskAnalysisFeature riskAnalysis={DossierEntity.riskAnalysis} />
    </DossierLayoutWidget>
  )
}

import { Card } from '@/shared/ui/Card'
import { useI18n } from '@/shared/i18n/useI18n'
import { RiskAnalysisPanel } from './components/RiskAnalysisPanel'
import { useRiskAnalysis } from './hooks/useRiskAnalysis'

export function RiskAnalysisFeature({ riskAnalysis }) {
  const { t } = useI18n()
  const { levelColor, levels } = useRiskAnalysis(riskAnalysis)

  return (
    <Card id="risk-analysis" title={t('dossier.section.riskAnalysis')}>
      <RiskAnalysisPanel riskAnalysis={riskAnalysis} levelColor={levelColor} levels={levels} />
    </Card>
  )
}

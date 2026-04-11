import { AppShell } from '@/app/AppShell'
import { DossierPage } from '@/pages/dossier/DossierPage'
import { MaterialsPreviewPage } from '@/pages/materials-preview'

export default function App() {
  if (window.location.pathname === '/materials/preview') {
    return <MaterialsPreviewPage />
  }

  return (
    <AppShell>
      <DossierPage />
    </AppShell>
  )
}

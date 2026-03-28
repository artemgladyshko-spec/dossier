import { createDocument } from '@/entities/document'

export function useDocumentGenerator() {
  const generateDocument = ({ dossierId, section, title }) =>
    createDocument({
      id: `${dossierId}-${section}-${Date.now()}`,
      title,
      section,
      kind: 'generated',
      createdAt: new Date().toISOString().slice(0, 10),
      source: 'generated',
    })

  return {
    generateDocument,
  }
}

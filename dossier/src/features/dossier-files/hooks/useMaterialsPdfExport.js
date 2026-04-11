import { useState } from 'react'
import { jsPDF } from 'jspdf'

function waitFrame() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 0)
  })
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth)
  doc.text(lines, x, y)
  return y + lines.length * lineHeight
}

export function useMaterialsPdfExport({ t }) {
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)
  const [exportStatus, setExportStatus] = useState(null)

  const exportAllDocuments = async ({ folders, dossierId }) => {
    const orderedFolders = folders
      .map((folder) => ({
        ...folder,
        documents: [...folder.documents].sort((left, right) => right.createdAt.localeCompare(left.createdAt)),
      }))
      .filter((folder) => folder.documents.length > 0)

    const totalDocuments = orderedFolders.reduce((sum, folder) => sum + folder.documents.length, 0)

    if (!totalDocuments) {
      setExportStatus({ kind: 'error', message: t('materials.exportEmpty') })
      return
    }

    setIsExporting(true)
    setExportProgress(0)
    setExportStatus(null)

    try {
      const doc = new jsPDF({
        unit: 'pt',
        format: 'a4',
      })
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const marginX = 56
      const marginTop = 64
      const marginBottom = 56
      const contentWidth = pageWidth - marginX * 2
      let y = marginTop
      let processed = 0

      const ensureSpace = (requiredHeight = 72) => {
        if (y + requiredHeight <= pageHeight - marginBottom) {
          return
        }

        doc.addPage()
        y = marginTop
      }

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(24)
      doc.text(t('materials.exportTitle'), marginX, y)
      y += 32
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(11)
      y = addWrappedText(doc, t('materials.exportIntro'), marginX, y, contentWidth, 16)
      y += 18

      for (const folder of orderedFolders) {
        ensureSpace(64)
        doc.setDrawColor(207, 218, 229)
        doc.setFillColor(244, 247, 250)
        doc.roundedRect(marginX, y - 18, contentWidth, 34, 8, 8, 'FD')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(15)
        doc.text(t(folder.labelKey), marginX + 16, y + 4)
        y += 40

        for (const documentItem of folder.documents) {
          await waitFrame()
          ensureSpace(168)

          doc.setDrawColor(232, 240, 248)
          doc.roundedRect(marginX, y, contentWidth, 126, 10, 10)
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(13)
          doc.text(documentItem.titleKey ? t(documentItem.titleKey) : documentItem.title, marginX + 18, y + 24)

          doc.setFont('helvetica', 'normal')
          doc.setFontSize(10)
          doc.text(`${t('materials.table.createdAt')}: ${documentItem.createdAt}`, marginX + 18, y + 46)
          doc.text(`${t('materials.table.source')}: ${t(`materials.source.${documentItem.source}`)}`, marginX + 18, y + 62)
          doc.text(`${t('materials.viewerType')}: ${(documentItem.fileType ?? 'pdf').toUpperCase()}`, marginX + 18, y + 78)

          doc.setFontSize(11)
          const description =
            documentItem.fileType === 'pdf'
              ? t('materials.exportPdfDescription')
              : documentItem.fileType === 'docx'
                ? t('materials.exportDocxDescription')
                : t('materials.exportImageDescription')
          addWrappedText(doc, description, marginX + 18, y + 100, contentWidth - 36, 15)

          y += 146
          processed += 1
          setExportProgress(Math.round((processed / totalDocuments) * 100))
        }

        y += 8
      }

      const fileName = `${dossierId ?? 'dossier'}-materials-export.pdf`
      downloadBlob(doc.output('blob'), fileName)
      setExportStatus({ kind: 'success', message: t('materials.exportSuccess') })
    } catch (error) {
      setExportStatus({ kind: 'error', message: t('materials.exportFailed') })
    } finally {
      setIsExporting(false)
    }
  }

  return {
    isExporting,
    exportProgress,
    exportStatus,
    exportAllDocuments,
  }
}

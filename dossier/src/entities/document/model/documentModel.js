export function createDocument({
  id,
  title,
  titleKey,
  section,
  kind,
  fileType = 'pdf',
  createdAt,
  source = 'uploaded',
}) {
  return {
    id,
    title,
    titleKey,
    section,
    kind,
    fileType,
    createdAt,
    source,
  }
}

export function getLatestDocument(documents) {
  return [...documents].sort((left, right) => right.createdAt.localeCompare(left.createdAt))[0] ?? null
}

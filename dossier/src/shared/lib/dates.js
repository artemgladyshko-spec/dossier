export function isWithinDateRange(value, dateFrom, dateTo) {
  if (!value) return false
  if (dateFrom && value < dateFrom) return false
  if (dateTo && value > dateTo) return false
  return true
}

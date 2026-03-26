import { useMemo, useState } from 'react'
import { isWithinDateRange } from '@/shared/lib/dates'

const PAGE_SIZE = 2

export function useRegistryFilters(records) {
  const [search, setSearch] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [page, setPage] = useState(1)

  const filteredRecords = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return records.filter((record) => {
      const matchesSearch =
        !normalizedSearch ||
        [record.registry, record.action, record.reference, record.operator]
          .join(' ')
          .toLowerCase()
          .includes(normalizedSearch)

      return matchesSearch && isWithinDateRange(record.recordDate, dateFrom, dateTo)
    })
  }, [records, search, dateFrom, dateTo])

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const paginatedRecords = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE
    return filteredRecords.slice(startIndex, startIndex + PAGE_SIZE)
  }, [currentPage, filteredRecords])

  return {
    search,
    setSearch,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    currentPage,
    totalPages,
    paginatedRecords,
    totalRecords: filteredRecords.length,
    setPage,
  }
}

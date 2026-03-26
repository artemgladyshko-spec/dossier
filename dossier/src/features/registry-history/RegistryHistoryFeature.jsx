import { Card } from '@/shared/ui/Card'
import { useI18n } from '@/shared/i18n/useI18n'
import { RegistryHistoryFilters } from './components/RegistryHistoryFilters'
import { RegistryHistoryPagination } from './components/RegistryHistoryPagination'
import { RegistryHistoryTable } from './components/RegistryHistoryTable'
import { useRegistryFilters } from './hooks/useRegistryFilters'

export function RegistryHistoryFeature({ records }) {
  const { t } = useI18n()
  const {
    search,
    setSearch,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
    currentPage,
    totalPages,
    paginatedRecords,
    totalRecords,
    setPage,
  } = useRegistryFilters(records)

  return (
    <Card id="registry-history" title={t('dossier.section.registryHistory')}>
      <RegistryHistoryFilters
        search={search}
        onSearchChange={(value) => {
          setSearch(value)
          setPage(1)
        }}
        dateFrom={dateFrom}
        onDateFromChange={(value) => {
          setDateFrom(value)
          setPage(1)
        }}
        dateTo={dateTo}
        onDateToChange={(value) => {
          setDateTo(value)
          setPage(1)
        }}
      />
      <RegistryHistoryTable records={paginatedRecords} />
      <RegistryHistoryPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={totalRecords}
        onPageChange={setPage}
      />
    </Card>
  )
}

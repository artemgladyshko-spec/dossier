import { Box, Typography } from '@mui/material'
import { DatePicker } from '@/shared/ui/DatePicker'
import { Input } from '@/shared/ui/Input'
import { useI18n } from '@/shared/i18n/useI18n'

export function RegistryHistoryFilters({ search, onSearchChange, dateFrom, onDateFromChange, dateTo, onDateToChange }) {
  const { t } = useI18n()

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr 1fr' }, gap: 2 }}>
      <Input label={t('registry.search')} value={search} onChange={onSearchChange} />
      <DatePicker label={t('registry.dateFrom')} value={dateFrom} onChange={onDateFromChange} />
      <DatePicker label={t('registry.dateTo')} value={dateTo} onChange={onDateToChange} />
      <Typography variant="body2" color="text.secondary" sx={{ gridColumn: { xs: 'auto', md: '1 / -1' } }}>
        {t('registry.filteredRecords')}
      </Typography>
    </Box>
  )
}

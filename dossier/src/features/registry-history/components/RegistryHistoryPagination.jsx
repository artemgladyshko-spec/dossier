import { Box, Typography } from '@mui/material'
import { Button } from '@/shared/ui/Button'
import { useI18n } from '@/shared/i18n/useI18n'

export function RegistryHistoryPagination({ currentPage, totalPages, onPageChange, totalRecords }) {
  const { t } = useI18n()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
      <Typography variant="body2" color="text.secondary">
        {t('registry.paginationSummary', { currentPage, totalPages, totalRecords })}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="outlined" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          {t('registry.previous')}
        </Button>
        <Button variant="outlined" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
          {t('registry.next')}
        </Button>
      </Box>
    </Box>
  )
}

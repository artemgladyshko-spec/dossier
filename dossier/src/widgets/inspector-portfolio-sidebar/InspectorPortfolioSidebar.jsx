import { useEffect, useMemo, useRef, useState } from 'react'
import { Box, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { useI18n } from '@/shared/i18n/useI18n'

const inactiveTabBorderColor = 'rgba(20, 32, 43, 0.14)'
const activeTabBorderColor = 'rgba(37, 99, 235, 0.35)'

const GROUP_ROW_HEIGHT = 52
const JUDGE_ROW_HEIGHT = 42
const VIRTUAL_OVERSCAN = 220

function useVirtualRows(rows) {
  const viewportRef = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(480)

  useEffect(() => {
    if (!viewportRef.current) {
      return undefined
    }

    const node = viewportRef.current
    const updateHeight = () => setViewportHeight(node.clientHeight)

    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const measuredRows = useMemo(() => {
    let offset = 0

    return rows.map((row) => {
      const height = row.type === 'group' ? GROUP_ROW_HEIGHT : JUDGE_ROW_HEIGHT
      const measuredRow = { ...row, top: offset, height }
      offset += height
      return measuredRow
    })
  }, [rows])

  const lastRow = measuredRows.at(-1)
  const totalHeight = lastRow ? lastRow.top + lastRow.height : 0

  const visibleRows = useMemo(
    () =>
      measuredRows.filter(
        (row) =>
          row.top + row.height >= scrollTop - VIRTUAL_OVERSCAN &&
          row.top <= scrollTop + viewportHeight + VIRTUAL_OVERSCAN,
      ),
    [measuredRows, scrollTop, viewportHeight],
  )

  return {
    viewportRef,
    totalHeight,
    visibleRows,
    setScrollTop,
  }
}

function buildPreview(items) {
  return items
    .slice(0, 3)
    .map((item) => item.fullName.split(' ')[0])
    .join(', ')
}

function JudgeRow({ judge, selected, onSelect }) {
  const { t } = useI18n()
  const initials = `${judge.fullName[0] ?? ''}${judge.fullName.split(' ')[1]?.[0] ?? ''}`.trim()

  return (
    <Box sx={{ pl: 1.5 }}>
      <Box
        component="button"
        type="button"
        onClick={() => onSelect(judge.id)}
        sx={{
          width: '100%',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          textAlign: 'left',
          px: 1.25,
          py: 0.75,
          minHeight: 42,
          display: 'grid',
          gridTemplateColumns: '28px minmax(0, 1fr) minmax(0, 1.1fr)',
          alignItems: 'center',
          columnGap: 1,
          color: 'text.primary',
          outline: 'none',
          '&:hover': {
            bgcolor: 'rgba(20, 32, 43, 0.04)',
          },
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            bgcolor: selected ? 'rgba(37, 99, 235, 0.12)' : 'rgba(82, 97, 113, 0.12)',
            color: selected ? '#2563eb' : 'text.primary',
            display: 'grid',
            placeItems: 'center',
            fontSize: 12,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {initials}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              maxWidth: '100%',
              px: 0.75,
              py: '3px',
              borderTop: `1px solid ${selected ? activeTabBorderColor : inactiveTabBorderColor}`,
              borderLeft: `1px solid ${selected ? activeTabBorderColor : inactiveTabBorderColor}`,
              borderRight: `1px solid ${selected ? activeTabBorderColor : inactiveTabBorderColor}`,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                minWidth: 0,
                fontSize: '0.875rem',
                fontWeight: selected ? 500 : 400,
                color: selected ? '#2563eb' : 'text.primary',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {judge.fullName}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{
            minWidth: 0,
            fontSize: '0.875rem',
            color: 'text.secondary',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {t(judge.courtKey)}
        </Typography>
      </Box>
    </Box>
  )
}

function GroupRow({ group, open, onToggle }) {
  const { t } = useI18n()
  const preview = buildPreview(group.items)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        component="button"
        type="button"
        onClick={() => onToggle(group.value)}
        sx={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          textAlign: 'left',
          px: 0,
          py: open ? 0.625 : 0.75,
          minHeight: open ? 44 : 52,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.375,
          color: 'text.primary',
          outline: 'none',
          position: 'relative',
          '&:hover': {
            bgcolor: 'rgba(20, 32, 43, 0.04)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 1.25,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {`${t(group.labelKey)} (${group.items.length})`}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {open ? '-' : '+'}
          </Typography>
        </Box>
        {!open && preview ? (
          <Typography variant="caption" color="text.secondary" sx={{ pl: 2.25 }}>
            {`${preview}${group.items.length > 3 ? '...' : ''}`}
          </Typography>
        ) : null}
      </Box>
    </Box>
  )
}

export function InspectorPortfolioSidebar({
  groups,
  recentDossiers,
  filters,
  filterOptions,
  selectedJudgeId,
  searchValue,
  onSearchChange,
  onFilterChange,
  onJudgeSelect,
}) {
  const { t } = useI18n()
  const [openGroups, setOpenGroups] = useState({})

  useEffect(() => {
    if (groups.length === 0) {
      setOpenGroups({})
      return
    }

    setOpenGroups((current) =>
      groups.reduce((nextState, group) => {
        nextState[group.value] = current[group.value] ?? group.items.length <= 10
        return nextState
      }, {}),
    )
  }, [groups, selectedJudgeId])

  const rows = useMemo(
    () =>
      groups.flatMap((group) => [
        {
          type: 'group',
          id: `group-${group.value}`,
          group,
        },
        ...(openGroups[group.value]
          ? group.items.map((judge) => ({
              type: 'judge',
              id: judge.id,
              judge,
              groupValue: group.value,
            }))
          : []),
      ]),
    [groups, openGroups],
  )

  const { viewportRef, totalHeight, visibleRows, setScrollTop } = useVirtualRows(rows)

  const handleToggleGroup = (groupKey) => {
    setOpenGroups((current) => ({
      ...current,
      [groupKey]: !current[groupKey],
    }))
  }

  return (
    <Paper
      component="aside"
      sx={{
        width: { xs: '100%', lg: 380 },
        borderRadius: 0,
        border: 0,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          p: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {t('portfolio.eyebrow')}
          </Typography>
          <Typography variant="h6">{t('portfolio.title')}</Typography>
        </Box>

        <TextField
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t('portfolio.searchPlaceholder')}
          size="small"
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 1 }}>
          <TextField
            select
            size="small"
            label={t('portfolio.filter.status')}
            value={filters.status}
            onChange={(event) => onFilterChange('status', event.target.value)}
          >
            {filterOptions.status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {t(option.labelKey)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            label={t('portfolio.filter.courtLevel')}
            value={filters.courtLevel}
            onChange={(event) => onFilterChange('courtLevel', event.target.value)}
          >
            {filterOptions.courtLevel.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {t(option.labelKey)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            label={t('portfolio.filter.courtType')}
            value={filters.courtType}
            onChange={(event) => onFilterChange('courtType', event.target.value)}
          >
            {filterOptions.courtType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {t(option.labelKey)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            size="small"
            label={t('portfolio.filter.region')}
            value={filters.region}
            onChange={(event) => onFilterChange('region', event.target.value)}
          >
            {filterOptions.region.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.labelKey ? t(option.labelKey) : option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {recentDossiers?.length ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, pt: 0.5 }}>
            <Typography variant="subtitle2" color="text.secondary">
              {t('portfolio.recentTitle')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
              {recentDossiers.slice(0, 5).map((judge) => (
                <JudgeRow key={`recent-${judge.id}`} judge={judge} selected={judge.id === selectedJudgeId} onSelect={onJudgeSelect} />
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>

      <Box
        ref={viewportRef}
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
        sx={{
          flex: 1,
          overflowY: 'auto',
          py: 0.5,
        }}
      >
        {rows.length === 0 ? (
          <Box sx={{ minHeight: 220, display: 'grid', placeItems: 'center', px: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {t('portfolio.empty')}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ position: 'relative', height: totalHeight }}>
            {visibleRows.map((row) => (
              <Box
                key={row.id}
                sx={{
                  position: 'absolute',
                  top: row.top,
                  left: 0,
                  right: 0,
                  height: row.height,
                }}
              >
                {row.type === 'group' ? (
                  <Box
                    sx={{
                      mx: 0.75,
                      my: 1,
                      position: 'relative',
                    }}
                  >
                    <GroupRow group={row.group} open={Boolean(openGroups[row.group.value])} onToggle={handleToggleGroup} />
                  </Box>
                ) : (
                  <Box sx={{ pl: 1.25 }}>
                    <JudgeRow judge={row.judge} selected={row.judge.id === selectedJudgeId} onSelect={onJudgeSelect} />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Paper>
  )
}

import { Box, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

export function Table({ columns, rows, emptyLabel, minWidth = 720 }) {
  if (!rows.length) {
    return (
      <Typography variant="body2" color="text.secondary">
        {emptyLabel}
      </Typography>
    )
  }

  return (
    <TableContainer sx={{ overflowX: 'auto' }}>
      <MuiTable size="small" sx={{ minWidth }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  <Box sx={{ minWidth: 120 }}>{column.render ? column.render(row) : row[column.key]}</Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}

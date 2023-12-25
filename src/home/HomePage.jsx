import { Box } from '@mui/material'
import { Filters } from './Filters/Filters'

export function HomePage() {
  return (
    <Box sx={{ display: 'flex', padding: '24px' }}>
      <Filters />
    </Box>
  )
}

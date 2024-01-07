import { Box } from '@mui/material'
import { Filters } from './Filters/Filters'
import { MoviesContainer } from './Movies/MoviesContainer'

export function HomePage() {
  return (
    <Box sx={{ display: 'flex', padding: '24px' }}>
      <Filters />
      <MoviesContainer />
    </Box>
  )
}

import { Box, IconButton, Pagination, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SearchByTitle } from './SearchByTitle'
import { SelectSortBy } from './SelectSortBy'
import { ReleaseYearSlider } from './ReleaseYearSlider'
import { SelectGenres } from './SelectGenres'
import { MoviesPagination } from './Pagination'
import { useSelector } from 'react-redux'
import { selectedFilters } from '../../store/selectors'

export function Filters() {
  const filtersState = useSelector(selectedFilters)
  console.log(filtersState)
  return (
    <Paper
      sx={{
        padding: '16px',
        minWidth: '300px',
        maxHeight: '500px',
        minHeight: '500px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <FiltersTitle title="Фильтры" />
      <SearchByTitle />
      <SelectSortBy />
      <ReleaseYearSlider />
      <SelectGenres />
      <MoviesPagination />
    </Paper>
  )
}

function FiltersTitle({ title }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <IconButton sx={{ padding: 0 }}>
        <CloseIcon></CloseIcon>
      </IconButton>
    </Box>
  )
}

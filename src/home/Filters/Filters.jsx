import { Box, IconButton, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SearchByTitle } from './SearchByTitle'
import { SelectSortBy } from './SelectSortBy'
import { ReleaseYearSlider } from './ReleaseYearSlider'
import { SelectGenres } from './SelectGenres'

const fetchedGenres = [{ name: 'genre_1' }, { name: 'genre_2' }]

export function Filters() {
  return (
    <Paper
      sx={{
        padding: '16px',
        minWidth: '300px',
        maxHeight: '723px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <FiltersTitle title="Фильтры" />
      <SearchByTitle />
      <SelectSortBy />
      <ReleaseYearSlider />
      <SelectGenres genres={fetchedGenres} />
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

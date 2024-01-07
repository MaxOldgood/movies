import { Box, Slider, Typography } from '@mui/material'
import store from '../../store/store'

import { useSelector } from 'react-redux'
import { selectMaxDate, selectMinDate } from '../../store/selectors'
import { releaseYearChanged } from '../../store/actionCreators/filtersActionCreators'

export function ReleaseYearSlider() {
  const minDate = useSelector(selectMinDate)
  const maxDate = useSelector(selectMaxDate)
  function handleReleaseYearChange(e) {
    e.preventDefault()
    store.dispatch(releaseYearChanged(e.target.value[0], e.target.value[1]))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="body1" paddingY={'16px'}>
        Год релиза
      </Typography>
      <Slider
        onChange={handleReleaseYearChange}
        max={2023}
        min={1950}
        value={[minDate, maxDate]}
        valueLabelDisplay="on"
      />
    </Box>
  )
}

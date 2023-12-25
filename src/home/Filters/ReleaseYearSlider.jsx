import { Box, Slider, Typography } from '@mui/material'

export function ReleaseYearSlider() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="body1" paddingY={'16px'}>
        Год релиза
      </Typography>
      <Slider max={2023} min={1950} valueLabelDisplay="on" />
    </Box>
  )
}

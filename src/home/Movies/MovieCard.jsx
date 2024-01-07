import { Card, CardHeader, CardMedia, Icon, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

export function MovieCard({ id, movieTitle, raiting, img }) {
  const Icon = StarIcon
  return (
    <Card sx={{ minWidth: 296, maxWidth: 345, maxHeight: 324 }}>
      <CardMedia sx={{ height: 240 }} image={img} />
      <CardHeader
        title={movieTitle}
        titleTypographyProps={{ variant: 'h5' }}
        subheader={`Рейтинг ${raiting}`}
        subheaderTypographyProps={{ variant: 'body2' }}
        action={
          <IconButton>
            <Icon />
          </IconButton>
        }
      ></CardHeader>
    </Card>
  )
}

import { Box } from '@mui/material'
import { MovieCard } from './MovieCard'
import { useEffect } from 'react'
import { getMovies } from '../../Services/tmdbApi'
import { useSelector } from 'react-redux'
import {
  selectedFilters as filtersState,
  selectMoviesList,
} from '../../store/selectors'
import store from '../../store/store'
import { moviesListUpdated } from '../../store/actionCreators/moviesListActionCreators'

export function MoviesContainer() {
  const selectedFilters = useSelector(filtersState)
  useEffect(() => {
    let ignore = false
    const getMoviesByFilters = async () => {
      try {
        const data = await getMovies(selectedFilters)
        if (!ignore) {
          store.dispatch(moviesListUpdated(data))
        }
      } catch (error) {
        console.error('Error fetching films:', error)
      }
    }
    getMoviesByFilters()
    return () => {
      ignore = true
    }
  }, [selectedFilters])
  const movieList = useSelector(selectMoviesList)
  console.log(movieList)
  if (movieList) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '16px',
          paddingLeft: '10px',
        }}
      >
        {movieList.results.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              key={movie.id}
              movieTitle={movie.title}
              raiting={movie.vote_average.toFixed(1)}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          )
        })}
      </Box>
    )
  }
}

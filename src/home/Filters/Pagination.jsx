import { Pagination } from '@mui/material'
import store from '../../store/store'
import { pageChanged } from '../../store/actionCreators/filtersActionCreators'
import { useSelector } from 'react-redux'
import { selectCurrentPage, selectMoviesList } from '../../store/selectors'

export function MoviesPagination() {
  const movieList = useSelector(selectMoviesList)
  const currentPage = useSelector(selectCurrentPage)
  function handlePageChange(e, page) {
    e.preventDefault()
    store.dispatch(pageChanged(page))
  }

  let count
  movieList ? (count = movieList.total_pages) : (count = 1)
  return (
    <Pagination
      sx={{ width: '300px' }}
      color="primary"
      count={count}
      size="small"
      page={currentPage}
      onChange={handlePageChange}
    />
  )
}

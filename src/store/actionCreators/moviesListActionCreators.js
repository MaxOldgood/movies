import { moviesListActions } from '../actions/moviesListActions'

export function moviesListUpdated(moviesList) {
  return {
    type: moviesListActions.UPDATED,
    moviesList: moviesList,
  }
}

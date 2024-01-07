import { moviesListActions } from '../actions/moviesListActions'

function moviesListReducer(state = '', action) {
  switch (action.type) {
    case moviesListActions.UPDATED:
      return Object.assign({}, state, {
        movieList: action.moviesList,
      })
    default:
      return state
  }
}

export default moviesListReducer

import { defaultFilters } from '../initialState'
import { filtersActions } from '../actions/filtersActions'

function filtersReducer(state = defaultFilters, action) {
  switch (action.type) {
    case filtersActions.RELEASE_YEAR_CHANGED:
      return Object.assign({}, state, {
        minDate: action.minDate,
        maxDate: action.maxDate,
      })
    case filtersActions.SORT_BY_CHANGED:
      return Object.assign({}, state, {
        sortBy: action.sortBy,
      })
    case filtersActions.GENRES_CHANGED:
      return Object.assign({}, state, {
        genres: action.genres,
      })
    case filtersActions.PAGE_CHANGED:
      return Object.assign({}, state, {
        page: action.page,
      })
    default:
      return state
  }
}

export default filtersReducer

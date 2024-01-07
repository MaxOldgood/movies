import { filtersActions } from '../actions/filtersActions'

export function releaseYearChanged(minDate, maxDate) {
  return {
    type: filtersActions.RELEASE_YEAR_CHANGED,
    minDate: minDate,
    maxDate: maxDate,
  }
}

export function sortByChanged(sortBy) {
  return {
    type: filtersActions.SORT_BY_CHANGED,
    sortBy: sortBy,
  }
}

export function genresChanged(genres) {
  return {
    type: filtersActions.GENRES_CHANGED,
    genres: genres,
  }
}

export function pageChanged(page) {
  return {
    type: filtersActions.PAGE_CHANGED,
    page: page,
  }
}

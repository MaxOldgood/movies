export const selectedFilters = (state) => state.filtersReducer
export const selectCurrentPage = (state) => state.filtersReducer.page
export const selectMinDate = (state) => state.filtersReducer.minDate
export const selectMaxDate = (state) => state.filtersReducer.maxDate
export const selectSortBy = (state) => state.filtersReducer.sortBy

export const selectToken = (state) => state.userReducer.token

export const selectIsLoggedIn = (state) => state.userReducer.isLoggedIn

export const selectMoviesList = (state) => state.moviesListReducer.movieList

export const enterTokenIsOpen = (state) => state.loginPageReducer.enterToken
export const enterEmailIsOpen = (state) => state.loginPageReducer.enterEmail

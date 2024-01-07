import { combineReducers } from 'redux'

import filtersReducer from './filtersReducer'
import userReducer from './userReducer'
import moviesListReducer from './moviesListReducer'
import loginPageReducer from './loginPageReducer'

const rootReducer = combineReducers({
  loginPageReducer,
  filtersReducer,
  userReducer,
  moviesListReducer,
})

export default rootReducer

import { userActions } from '../actions/userActions'
import { initialUserData } from '../initialState'

function userReducer(state = initialUserData, action) {
  switch (action.type) {
    case userActions.EMAIL_CHANGED:
      return Object.assign({}, state, {
        email: action.email,
      })
    case userActions.TOKEN_CHANGED:
      return Object.assign({}, state, {
        token: action.token,
      })
    case userActions.LOGGED_IN:
      return Object.assign({}, state, {
        isLoggedIn: action.isLoggedIn,
        id: action.id,
        userName: action.userName,
      })
    default:
      return state
  }
}

export default userReducer

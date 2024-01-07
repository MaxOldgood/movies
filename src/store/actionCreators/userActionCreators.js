import { userActions } from '../actions/userActions'

export function emailChanged(email) {
  return {
    type: userActions.EMAIL_CHANGED,
    email: email,
  }
}

export function tokenChanged(token) {
  return {
    type: userActions.TOKEN_CHANGED,
    token: token,
  }
}

export function loggedIn(isLoggedIn, id, userName) {
  return {
    type: userActions.LOGGED_IN,
    isLoggedIn: isLoggedIn,
    id: id,
    userName: userName,
  }
}

import { initialDialogsState } from '../initialState'
import { loginPageActions } from '../actions/loginPageActions'

function loginPageReducer(state = initialDialogsState, action) {
  switch (action.type) {
    case loginPageActions.DIALOGS_VISIBILITY:
      return Object.assign({}, state, {
        enterEmail: action.enterEmail,
        enterToken: action.enterToken,
      })
    default:
      return state
  }
}

export default loginPageReducer

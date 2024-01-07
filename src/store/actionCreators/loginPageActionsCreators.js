import { loginPageActions } from '../actions/loginPageActions'

export function dialogsVisibility(enterEmailisVisibile, enterTokenIsVisible) {
  return {
    type: loginPageActions.DIALOGS_VISIBILITY,
    enterEmail: enterEmailisVisibile,
    enterToken: enterTokenIsVisible,
  }
}

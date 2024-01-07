import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material'
import { ValidateKey, getAccountId } from '../Services/tmdbApi'
import {
  emailChanged,
  loggedIn,
  tokenChanged,
} from '../store/actionCreators/userActionCreators'
import store from '../store/store'
import { useSelector } from 'react-redux'
import {
  enterEmailIsOpen,
  enterTokenIsOpen,
  selectToken,
} from '../store/selectors'
import { dialogsVisibility } from '../store/actionCreators/loginPageActionsCreators'

export function EnterEmailDialog() {
  const isOpen = useSelector(enterEmailIsOpen)

  function handleEmailChange(e) {
    store.dispatch(emailChanged(e.target.value))
  }

  function handleCancelButton() {
    store.dispatch(dialogsVisibility(false, false))
  }

  function handleRequestButton() {
    store.dispatch(dialogsVisibility(false, true))
  }
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Запросить токен</DialogTitle>
      <DialogContent
        sx={{
          height: '100px',
          width: '444px',
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Почта"
          type="email"
          fullWidth
          variant="standard"
          onChange={handleEmailChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelButton}>Отмена</Button>
        <Button onClick={handleRequestButton}>Запросить</Button>
      </DialogActions>
    </Dialog>
  )
}

function EnterToketDialog() {
  const isOpen = useSelector(enterTokenIsOpen)
  const token = useSelector(selectToken)

  function handleTokenChange(e) {
    store.dispatch(tokenChanged(e.target.value))
  }

  function handleOkButton() {
    const fetchData = async () => {
      const response = await ValidateKey(token)
      const account = await getAccountId(token)

      if (response) {
        localStorage.setItem('token', token)
        store.dispatch(loggedIn(true, account.id, account.userName))
        store.dispatch(dialogsVisibility(false, false))
      }
    }
    fetchData()
  }

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Введите токен</DialogTitle>
      <DialogContent
        sx={{
          height: '100px',
          width: '444px',
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Токен"
          type="text"
          fullWidth
          variant="standard"
          inputProps={{ type: 'text' }}
          onChange={handleTokenChange}
        />
      </DialogContent>
      <DialogActions>
        <Button>Отмена</Button>
        <Button onClick={handleOkButton}>Ок</Button>
      </DialogActions>
    </Dialog>
  )
}

export function LoginPage() {
  return (
    <>
      <EnterEmailDialog />
      <EnterToketDialog />
    </>
  )
}

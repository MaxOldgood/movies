import { CssBaseline } from '@mui/material'
import { Header } from './Common/Header'
import { HomePage } from './Home/HomePage'
import { LoginPage } from './login/LoginPage'

import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store/store'
import { loggedIn } from './store/actionCreators/userActionCreators'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from './store/selectors'

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      store.dispatch(loggedIn(true, 'test', 'test'))
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <CssBaseline>
          <Header />
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <HomePage /> : <LoginPage />}
            ></Route>
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </>
  )
}
export default App

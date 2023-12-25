import { CssBaseline } from '@mui/material'
import { Header } from './Common/Header'
import { HomePage } from './Home/HomePage'

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <HomePage />
      </CssBaseline>
    </>
  )
}
export default App

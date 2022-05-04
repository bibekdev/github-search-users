import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

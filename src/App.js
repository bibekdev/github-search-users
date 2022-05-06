import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper'

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/' exact>
            <Dashboard />
          </PrivateRoute>
          <Route exact path='/login' component={Login} />
          <Route path='*' component={Error} />
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  )
}
export default App

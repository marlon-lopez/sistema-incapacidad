import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UserContext } from './context/UserContext'

//components
import UserForms from './screens/UserForms'
import Login from './screens/Login'
import UserInfo from './screens/UserInfo'
import Header from './components/Header'
import Users from './screens/Users'
import { PrivateRoute, AuthotizedRoute } from './components/PrivateRoute'
import Register from './screens/Register'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const { UserState } = useContext(UserContext)
  return (
    <Router>
      <GlobalStyles />
      {UserState.isAuthenticated && <Header />}
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/register' exact>
        <Register />
      </Route>
      <PrivateRoute path='/' exact></PrivateRoute>
      <PrivateRoute path='/me' exact>
        <UserInfo />
      </PrivateRoute>
      {UserState.user && (
        <>
          <AuthotizedRoute path='/users' exact isAdmin={UserState.user.isAdmin}>
            <Users />
          </AuthotizedRoute>
          <AuthotizedRoute path='/forms/:id' isAdmin={UserState.user.isAdmin}>
            <UserForms />
          </AuthotizedRoute>
        </>
      )}
      <PrivateRoute path='/myforms/:id' exact>
        <UserForms />
      </PrivateRoute>
    </Router>
  )
}

export default App

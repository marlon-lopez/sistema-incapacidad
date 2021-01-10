import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'

//components
import Forms from './components/Forms'
import MyForms from './components/MyForms'
import Login from './components/Login'
import UserInfo from './components/UserInfo'
import Header from './components/Header'
import Users from './components/Users'
import { PrivateRoute, AuthotizedRoute } from './components/PrivateRoute'
import Register from './components/Register'

import GlobalStyles from './components/GlobalStyles'

export const inputChangeHandler = (e, state, updateState) => {
  updateState({
    ...state,
    [e.target.name]: e.target.value,
  })
}
function App() {
  const { state } = useContext(UserContext)
  return (
    <Router>
      <GlobalStyles />
      {state.isAuthenticated && <Header />}
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
      {state.user && (
        <>
          <AuthotizedRoute path='/users' isAdmin={state.user.isAdmin}>
            <Users />
          </AuthotizedRoute>
          <AuthotizedRoute path='/forms' exact>
            <Forms />
          </AuthotizedRoute>
        </>
      )}
      <PrivateRoute path='/myforms' exact>
        <MyForms />
      </PrivateRoute>
    </Router>
  )
}

export default App

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

export const inputChangeHandler = (e, state, updateState) => {
  updateState({
    ...state,
    [e.target.name]: e.target.value,
  })
  console.log(e.target.value)
}
function App() {
  const { state } = useContext(UserContext)
  return (
    <Router>
      <Header />
      <Route path='/login' exact>
        <Login />
      </Route>
      <PrivateRoute path='/me'>
        <UserInfo />
      </PrivateRoute>
      {state.user && (
        <>
          <AuthotizedRoute path='/users' isAdmin={state.user.isAdmin}>
            <Users />
          </AuthotizedRoute>
          <AuthotizedRoute path='/forms'>
            <Forms />
          </AuthotizedRoute>
        </>
      )}
      <PrivateRoute path='/myforms'>
        <MyForms />
      </PrivateRoute>
    </Router>
  )
}

export default App

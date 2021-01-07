import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'

//components
import Form from './components/Form'
import Login from './components/Login'
import UserInfo from './components/UserInfo'
import Header from './components/Header'
import Users from './components/Users'
import { PrivateRoute } from './components/PrivateRoute'

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
      <PrivateRoute path='/users'>
        <Users />
      </PrivateRoute>
      <PrivateRoute path='/form'>
        <Form />
      </PrivateRoute>
    </Router>
  )
}

export default App

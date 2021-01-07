import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'
//pages
import Login from './pages/Login'
import Dissability from './pages/Dissability'
import UserInfo from './components/UserInfo'
//components
import Header from './components/Header'
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
      <PrivateRoute path='/Dissability'>
        <Dissability />
      </PrivateRoute>
      <PrivateRoute path='/me'>
        <UserInfo />
      </PrivateRoute>
    </Router>
  )
}

export default App

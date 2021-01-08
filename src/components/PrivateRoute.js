import { Route, Redirect } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={() => {
        return state.isAuthenticated ? children : <Redirect to='/login' />
      }}
    />
  )
}

export const AuthotizedRoute = ({ children, ...rest }) => {
  const { isAdmin } = rest
  return (
    <Route
      {...rest}
      render={() => {
        return isAdmin ? children : <Redirect to='/' />
      }}
    />
  )
}

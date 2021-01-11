import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const PrivateRoute = ({ children, ...rest }) => {
  const { UserState } = useContext(UserContext)
  return (
    <Route
      {...rest}
      render={() => {
        return UserState.isAuthenticated ? children : <Redirect to='/login' />
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

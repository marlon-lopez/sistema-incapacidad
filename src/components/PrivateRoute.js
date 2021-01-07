import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
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

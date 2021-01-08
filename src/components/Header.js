import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { logOut } from '../context/actions/UserActions'

function Header() {
  const { state, dispatch } = useContext(UserContext)

  return (
    <nav>
      <h1>App Name</h1>
      <div>
        <ul>
          {state.isAuthenticated && (
            <div className=''>
              <li>
                <Link to='/form'>Create Form</Link>
              </li>
              <li>
                <Link to='/me'>Me</Link>
              </li>
              <li>
                <Link to='/myforms'>My forms</Link>
              </li>
              {state.user.isAdmin && (
                <>
                  <li>
                    <Link to='/users'>All users</Link>
                  </li>
                  <li>
                    <Link to='/forms'>All forms</Link>
                  </li>
                </>
              )}
            </div>
          )}
          {!state.isAuthenticated ? (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          ) : (
            <li>
              <Link to='/login' onClick={() => logOut(dispatch)}>
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Header

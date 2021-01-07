import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Header() {
  const { state, logOut } = useContext(UserContext)

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
                <Link to='/myforms'>My Forms</Link>
              </li>
              <li>
                <Link to='/me'>Me</Link>
              </li>
            </div>
          )}
          {!state.isAuthenticated ? (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          ) : (
            <li>
              <Link to='/login' onClick={() => logOut()}>
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
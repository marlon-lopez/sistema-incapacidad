import React, { useContext, useState } from 'react'
import axios from 'axios'
//context
import { UserContext } from '../context/UserContext'
//actions
import { logIn } from '../context/actions/UserActions'
//components
import { inputChangeHandler } from '../App'

const Login = () => {
  const { state, dispatch } = useContext(UserContext)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    errorMsg: '',
  })
  const submitHandler = async (e) => {
    e.preventDefault()
    logIn(dispatch, userData)
  }

  return (
    <div className='login-container'>
      <div className='card'>
        <div className='container'>
          <form onSubmit={submitHandler}>
            <h1>Login</h1>

            <label>
              Email Address
              <input
                type='text'
                name='email'
                id='email'
                onChange={(e) => inputChangeHandler(e, userData, setUserData)}
              />
            </label>

            <label>
              Password
              <input
                type='password'
                name='password'
                id='password'
                onChange={(e) => inputChangeHandler(e, userData, setUserData)}
              />
            </label>

            <button>Login</button>
            <p>{state.isAuthenticated === true ? state.user.name : ' '}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

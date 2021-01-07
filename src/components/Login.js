import React, { useContext, useState } from 'react'
import axios from 'axios'
//context
import { UserContext } from '../context/UserContext'

//components
import { inputChangeHandler } from '../App'

const Login = () => {
  const { state, logIn } = useContext(UserContext)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    errorMsg: '',
  })
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/v1/auth/login', {
        email: userData.email,
        password: userData.password,
      })

      console.log(data.data)
      //const parsedData = await {}
      const dataParsed = await {
        user: {
          id: data.data._id,
          email: data.data.email,
          name: data.data.name,
          isAdmin: data.data.isAdmin,
        },
        token: data.data.token,
      }
      console.log(dataParsed)
      logIn(dataParsed)
    } catch (err) {
      console.log(err)
    }
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

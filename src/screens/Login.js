import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { GridForm } from '../components/GlobalStyles'
//context
import { UserContext } from '../context/UserContext'
//actions
import { logIn } from '../context/actions/UserActions'
//components
import { inputChangeHandler } from '../utils'

const Login = () => {
  const { UserState, dispatch } = useContext(UserContext)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const history = useHistory()

  useEffect(() => {
    if (UserState.isAuthenticated) {
      history.push('/')
      return () => {}
    }
  }, [UserState.isAuthenticated, history])

  const submitHandler = async (e) => {
    e.preventDefault()
    logIn(dispatch, userData)
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      {UserState.error && <h3>{UserState.error}</h3>}
      <StyledFormCard onSubmit={submitHandler}>
        <label>Correo Electronico</label>
        <input
          type='text'
          name='email'
          id='email'
          required
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />

        <label>Contraseña</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />

        <button>Iniciar sesion</button>
        <p>{UserState.isAuthenticated === true ? UserState.user.name : ' '}</p>
        <Link to='/register'> Register</Link>
      </StyledFormCard>
    </LoginContainer>
  )
}
const LoginContainer = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  h1 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #ea4c89;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`
const StyledFormCard = styled(GridForm)`
  label {
    color: #323232;
    grid-column: 1/3;
  }

  input {
    font-size: 1em;
    padding: 3px 5px;
    color: #707e93;
    border: solid 1px rgba(187, 187, 187, 0.8);
    border-radius: 3px;
  }
  button {
    background: #4b74ff;
    border: none;
    border-radius: 5px;
    color: white;
    grid-row: 3/4;
    grid-column: 2/3;
    padding: 10px 0;
  }
  a {
    grid-column: 3/4;
    align-self: center;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    label {
      grid-column: 1;
    }
    a,
    button {
      grid-column: 1;
    }
    button {
      grid-row: 6;
    }
  }
`

export default Login

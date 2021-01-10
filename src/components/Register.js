import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
//context
import { UserContext } from '../context/UserContext'
//actions
import { registerUser } from '../context/actions/UserActions'
//components
import { inputChangeHandler } from '../App'

const Register = () => {
  const { state, dispatch } = useContext(UserContext)
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    dui: '',
    code: '',
    startDate: '',
    job: '',
  })
  const history = useHistory()

  useEffect(() => {
    console.log(state.error)
    if (state.isAuthenticated) {
      history.push('/')
      return () => {}
    }
  }, [state.isAuthenticated])

  const submitHandler = async (e) => {
    e.preventDefault()
    registerUser(dispatch, userData)
  }

  return (
    <RegisterContainer>
      <h1>Register</h1>
      {state.error && <h3>{state.error}</h3>}
      <StyledFormCard onSubmit={submitHandler}>
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          id='name'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <label>Correo electronico</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <label>Contraseña</label>
        <input
          type='password'
          name='password'
          id='password'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <label>DUI</label>
        <input
          type='text'
          name='dui'
          id='dui'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />

        <label>Codigo</label>
        <input
          type='text'
          name='code'
          id='code'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <label>Fecha Ingreso</label>
        <input
          type='Date'
          name='startDate'
          id='startDate'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <label>Puesto</label>
        <input
          type='text'
          name='job'
          id='job'
          onChange={(e) => inputChangeHandler(e, userData, setUserData)}
        />
        <button>Register</button>
        <Link to='/login'>¿Ya tienes una cuenta? inicia sesion</Link>
      </StyledFormCard>
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
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
`
const StyledFormCard = styled.form`
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 30px 10px;
  text-align: center;

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
  }
`

export default Register

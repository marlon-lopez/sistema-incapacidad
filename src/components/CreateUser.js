import React from 'react'
import styled from 'styled-components'
import { EditForm, CardShadow } from './GlobalStyles'

import { inputChangeHandler } from '../utils'

const CreateUser = ({ submitHandler, setCreating, setNewUser, newUser }) => {
  return (
    <CardShadow>
      <StyledEditForm onSubmit={(e) => submitHandler(e, 'create')}>
        <i className='fas fa-times' onClick={() => setCreating(false)} />
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          id='name'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Correo Electronico</label>
        <input
          type='email'
          name='email'
          id='email'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Contraseña</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>DUI</label>
        <input
          type='text'
          name='dui'
          id='dui'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Codigo</label>
        <input
          type='text'
          name='code'
          id='code'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Fecha Ingreso a la Compañia</label>
        <input
          type='date'
          name='startDate'
          id='startDate'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Puesto</label>
        <input
          type='text'
          name='job'
          id='job'
          required
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <label>Administrador</label>
        <input
          type='checkbox'
          name='isAdmin'
          value='false'
          onChange={(e) => inputChangeHandler(e, newUser, setNewUser)}
        />
        <button>Crear</button>
      </StyledEditForm>
    </CardShadow>
  )
}
const StyledEditForm = styled(EditForm)`
  button {
    grid-row: 9/10;
  }
`

export default CreateUser

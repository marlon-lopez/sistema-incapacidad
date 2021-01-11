import React from 'react'
//styles
import styled from 'styled-components'
import { GridForm } from './GlobalStyles'

import { inputChangeHandler } from '../utils'

const CreateForm = ({ form, setForm, setCreating, submitHandler }) => {
  return (
    <CardShadow>
      <EditForm onSubmit={(e) => submitHandler(e, 'create')}>
        <i className='fas fa-times' onClick={() => setCreating(false)} />
        <label>Unidad Medica</label>
        <input
          type='text'
          name='hospital'
          id='email'
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Doctor</label>
        <input
          type='text'
          name='doctor'
          id='name'
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Fecha de Inicio</label>
        <input
          type='date'
          name='startDate'
          id='job'
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Fecha de Finalizacion</label>
        <input
          type='date'
          name='endDate'
          id='dui'
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <button>Crear</button>
      </EditForm>
    </CardShadow>
  )
}
const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
`

const EditForm = styled(GridForm)`
  z-index: 80;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);

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
    padding: 10px 0;
    grid-row: 6/7;
    grid-column: 2/4;
  }
  i {
    position: absolute;
    color: black;
    top: 5px;
    right: 15px;
    font-size: 1.5em;
  }
`
export default CreateForm

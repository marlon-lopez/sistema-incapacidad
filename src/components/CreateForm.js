import React from 'react'
//styles
import { CardShadow, EditForm } from './GlobalStyles'

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
          required
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Doctor</label>
        <input
          type='text'
          name='doctor'
          id='name'
          required
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Fecha de Inicio</label>
        <input
          type='date'
          name='startDate'
          id='job'
          required
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <label>Fecha de Finalizacion</label>
        <input
          type='date'
          name='endDate'
          id='dui'
          required
          onChange={(e) => inputChangeHandler(e, form, setForm)}
        />
        <button>Crear</button>
      </EditForm>
    </CardShadow>
  )
}

export default CreateForm

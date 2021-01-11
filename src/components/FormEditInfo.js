import React from 'react'
//styles
import styled from 'styled-components'
import { GridForm } from './GlobalStyles'

import { parsedFormDate } from '../utils'

const FormEditInfo = ({
  formChangeHandler,
  newFormInfo,
  submitHandler,
  setEditing,
}) => {
  return (
    <CardShadow>
      <EditForm onSubmit={(e) => submitHandler(e, 'update')}>
        <i className='fas fa-times' onClick={() => setEditing(false)} />
        <label>Unidad Medica</label>
        <input
          type='text'
          name='hospital'
          id='hospital'
          value={newFormInfo.hospital}
          onChange={(e) => {
            formChangeHandler({ hospital: e.target.value })
          }}
        />
        <label>Doctor</label>
        <input
          type='text'
          name='doctor'
          id='doctor'
          value={newFormInfo.doctor}
          onChange={(e) => {
            formChangeHandler({ doctor: e.target.value })
          }}
        />
        <label>Fecha de Inicio</label>
        <input
          type='date'
          name='startDate'
          id='startDate'
          value={parsedFormDate(newFormInfo.startDate)}
          onChange={(e) => {
            formChangeHandler({ startDate: e.target.value })
          }}
        />
        <label>Fecha Finalizacion</label>
        <input
          type='date'
          name='endDate'
          id='endDate'
          value={parsedFormDate(newFormInfo.endDate)}
          onChange={(e) => {
            formChangeHandler({ endDate: e.target.value })
          }}
        />
        <button>Actualizar</button>
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

export default FormEditInfo

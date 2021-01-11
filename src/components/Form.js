import React from 'react'
//styles
import styled from 'styled-components'
import { UserGrid } from './GlobalStyles'

import { parsedDate, countDays, parsedFormDate } from '../utils'

const Form = ({ formInfo, deleteFormHandler, selectFormHandler }) => {
  return (
    <StyledForm>
      <h4>Centro Medico</h4>
      <p>{formInfo.hospital}</p>
      <h4>Doctor</h4>
      <p>{formInfo.doctor}</p>
      <h4>Fecha de Ingreso</h4>
      <p>{parsedFormDate(formInfo.createdAt)}</p>
      <h4>Fecha de Inicio</h4>
      <p>{parsedDate(formInfo.startDate)}</p>
      <h4>Fecha de Finalizacion</h4>
      <p>{parsedDate(formInfo.endDate)}</p>
      <h4>Dias</h4>
      <p>
        {countDays(
          parsedFormDate(formInfo.startDate),
          parsedFormDate(formInfo.endDate),
        )}
      </p>
      <div className='actions'>
        <i
          className='fas fa-trash-alt'
          onClick={() => deleteFormHandler(formInfo._id)}></i>

        <i
          className='fas fa-pen'
          onClick={() => selectFormHandler(formInfo._id)}></i>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled(UserGrid)`
  align-items: center;
  grid-column-gap: 10px;
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  a {
    margin-top: 10px;
    font-size: 0.8em;
    color: #ea4c89;
    text-align: center;
  }
  i {
    width: 25px;
    height: 25px;
    text-align: center;
    padding: 5px;
    color: white;
    border-radius: 50%;
    font-size: 0.8em;
    cursor: pointer;
  }
  i:nth-child(1) {
    background: #ec4a4a;
  }
  i:nth-child(2) {
    background: #34a1de;
  }
`
export default Form

import React from 'react'
import { Link } from 'react-router-dom'
//styles
import styled from 'styled-components'
import { UserGrid } from './GlobalStyles'

const User = ({ userInfo, deleteUserHandler, SelectUserHandler }) => {
  return (
    <StyledUser>
      <h4>Nombre</h4>
      <p>{userInfo.name}</p>

      <h4>Correo Electronico</h4>
      <p>{userInfo.email}</p>

      <h4>Fecha de Inicio</h4>
      <p>10/12/2021 </p>

      <h4>DUI</h4>
      <p>{userInfo.dui}</p>

      <h4>Puesto</h4>
      <p>{userInfo.job}</p>

      <h4>Codigo</h4>
      <p>{userInfo.code}</p>

      <div className='actions'>
        <i
          className='fas fa-trash-alt'
          onClick={() => deleteUserHandler(userInfo.id)}></i>

        <i
          className='fas fa-pen'
          onClick={() => SelectUserHandler(userInfo.id)}></i>
      </div>
      <Link to={`/forms/${userInfo._id}`}>Incapacidades</Link>
    </StyledUser>
  )
}

const StyledUser = styled(UserGrid)`
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

export default User

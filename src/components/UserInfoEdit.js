import React from 'react'
//styles
import styled from 'styled-components'
import { GridForm } from './GlobalStyles'

const UserInfoEdit = ({
  userChangeHandler,
  newUserInfo,
  submitHandler,
  setEditing,
}) => {
  return (
    <CardShadow>
      <EditForm onSubmit={submitHandler}>
        <i className='fas fa-times' onClick={() => setEditing(false)} />
        <label>Correo Electronico</label>
        <input
          type='email'
          name='email'
          id='email'
          value={newUserInfo.email}
          onChange={(e) => {
            userChangeHandler({ email: e.target.value })
          }}
        />
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          id='name'
          value={newUserInfo.name}
          onChange={(e) => {
            userChangeHandler({ name: e.target.value })
          }}
        />
        <label>Puesto de Trabajo</label>
        <input
          type='text'
          name='job'
          id='job'
          value={newUserInfo.job}
          onChange={(e) => {
            userChangeHandler({ job: e.target.value })
          }}
        />
        <label>DUI</label>
        <input
          type='text'
          name='dui'
          id='dui'
          value={newUserInfo.dui}
          onChange={(e) => {
            userChangeHandler({ dui: e.target.value })
          }}
        />
        <label>Codigo</label>
        <input
          type='text'
          name='code'
          id='code'
          value={newUserInfo.code}
          onChange={(e) => {
            userChangeHandler({ code: e.target.value })
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

export default UserInfoEdit

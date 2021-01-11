import React from 'react'
//styles
import { EditForm, CardShadow } from './GlobalStyles'

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

export default UserInfoEdit

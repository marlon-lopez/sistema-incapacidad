import React from 'react'
//styles
import { EditForm, CardShadow } from './GlobalStyles'

const UserInfoEdit = ({
  userChangeHandler,
  newUser,
  submitHandler,
  setEditing,
}) => {
  return (
    <CardShadow>
      <EditForm onSubmit={(e) => submitHandler(e, 'update')}>
        <i className='fas fa-times' onClick={() => setEditing(false)} />
        <label>Correo Electronico</label>
        <input
          type='email'
          name='email'
          id='email'
          value={newUser.email}
          onChange={(e) => {
            userChangeHandler({ email: e.target.value })
          }}
        />
        <label>Nombre</label>
        <input
          type='text'
          name='name'
          id='name'
          value={newUser.name}
          onChange={(e) => {
            userChangeHandler({ name: e.target.value })
          }}
        />
        <label>Puesto de Trabajo</label>
        <input
          type='text'
          name='job'
          id='job'
          value={newUser.job}
          onChange={(e) => {
            userChangeHandler({ job: e.target.value })
          }}
        />
        <label>DUI</label>
        <input
          type='text'
          name='dui'
          id='dui'
          value={newUser.dui}
          onChange={(e) => {
            userChangeHandler({ dui: e.target.value })
          }}
        />
        <label>Codigo</label>
        <input
          type='text'
          name='code'
          id='code'
          value={newUser.code}
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

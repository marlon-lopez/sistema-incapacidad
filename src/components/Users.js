import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import CreateUser from './CreateUser'
import UserInfoEdit from './UserInfoEdit'
//actions
import {
  getAllUsers,
  deleteUser,
  createUser,
  updateSingleUser,
} from '../context/actions/UserActions'
import styled from 'styled-components'
import { CreateBtn } from './GlobalStyles'
import User from './User'

const Users = () => {
  const [newUser, setNewUser] = useState(null)
  const [editing, setEditing] = useState(null)
  const [creating, setCreating] = useState(false)
  const { UserState, dispatch } = useContext(UserContext)

  const SelectUserHandler = (id) => {
    const selectedUser = UserState.users.find((user) => user.id === id)
    console.log(selectedUser)
    setEditing(true)
    setNewUser(selectedUser)
  }
  const userChangeHandler = (changes) => {
    setEditing(true)
    setNewUser({ ...newUser, ...changes })
  }

  const submitHandler = (event, action) => {
    event.preventDefault()
    if (action === 'create') {
      createUser(dispatch, UserState.token, newUser)
      setCreating(false)
      setNewUser(null)
    }
    if (action === 'update') {
      updateSingleUser(dispatch, UserState.token, newUser, newUser.id)
      setEditing(false)
      setNewUser(null)
    }
  }
  const deleteUserHandler = (id) => {
    deleteUser(dispatch, UserState.token, id)
  }

  useEffect(() => {
    getAllUsers(dispatch, UserState.token)

    return () => {
      console.log('unmounted')
    }
  }, [dispatch, UserState.token])

  return (
    <Container>
      <div className='user-info'>
        <h3>Lista de Usuarios</h3>
        <CreateBtn onClick={() => setCreating(true)}>Crear Usuario</CreateBtn>
      </div>
      <UsersList>
        {UserState.users &&
          UserState.users.map((user) => {
            return (
              <User
                userInfo={user}
                key={user.id}
                deleteUserHandler={deleteUserHandler}
                SelectUserHandler={SelectUserHandler}
              />
            )
          })}
      </UsersList>
      {creating && (
        <CreateUser
          submitHandler={submitHandler}
          setCreating={setCreating}
          setNewUser={setNewUser}
          newUser={newUser}
        />
      )}
      {editing && (
        <UserInfoEdit
          newUser={newUser}
          submitHandler={submitHandler}
          setEditing={setEditing}
          userChangeHandler={userChangeHandler}
        />
      )}
    </Container>
  )
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .user-info {
    display: grid;
    grid-template-columns: repeat(3, 320px);
    grid-gap: 20px;
    margin: 20px auto;
    justify-content: center;

    button {
      grid-column: 3/4;
      width: 40%;
      justify-self: end;
    }
  }
`
const UsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 20px;
  margin: 20px auto;
  justify-content: center;
`

export default Users

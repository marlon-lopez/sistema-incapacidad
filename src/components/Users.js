import React, { useContext, useEffect, useState, useCallback } from 'react'
import { UserContext } from '../context/UserContext'
//actions
import { getAllUsers, deleteUser } from '../context/actions/UserActions'
import styled from 'styled-components'
import User from './User'

const Users = () => {
  const { state, dispatch } = useContext(UserContext)
  /*   const [users, setUsers] = useState(state.users)
  const [selectedUser, setSelectedUser] = useState()

  const seletectedUserHandler = (id) => {
    const selected = users.find((u) => u.id === id)
    setSelectedUser(selected)
  } */
  const deleteUserHandler = (id) => {
    deleteUser(dispatch, state.token, id)
  }

  useEffect(() => {
    getAllUsers(dispatch, state.token)

    return () => {
      console.log('unmounted')
    }
  }, [])

  return (
    <>
      <h2>Lista de Usuarios</h2>
      <UsersList>
        {state.users &&
          state.users.map((user) => {
            return (
              <User
                userInfo={user}
                key={user.id}
                deleteUserHandler={deleteUserHandler}
              />
            )
          })}
      </UsersList>
    </>
  )
}
const UsersList = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
  margin: 20px auto;
`

export default Users

import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
//actions
import { getAllUsers, deleteUser } from '../context/actions/UserActions'
import styled from 'styled-components'
import User from './User'

const Users = () => {
  const { UserState, dispatch } = useContext(UserContext)

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
      <h2>Lista de Usuarios</h2>
      <UsersList>
        {UserState.users &&
          UserState.users.map((user) => {
            return (
              <User
                userInfo={user}
                key={user.id}
                deleteUserHandler={deleteUserHandler}
              />
            )
          })}
      </UsersList>
    </Container>
  )
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const UsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 20px;
  margin: 20px auto;
  justify-content: center;
`

export default Users

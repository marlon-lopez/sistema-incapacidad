import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import User from './User'

const Users = () => {
  const { state } = useContext(UserContext)
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState()

  const seletectedUserHandler = (id) => {
    const selected = users.find((u) => u.id === id)
    setSelectedUser(selected)
  }

  const getUsers = async () => {
    try {
      const { data } = await axios.get('/api/v1/auth/users', {
        headers: {
          authorization: `Bearer ${state.token}`,
          'Content-Type': 'application/json',
        },
      })
      setUsers(data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
    return () => {
      console.log('cleaned')
    }
  }, [])

  return (
    <>
      {users &&
        users.map((user) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              seletectedUserHandler={seletectedUserHandler}
              selectedUser={selectedUser}
            />
          )
        })}
    </>
  )
}

export default Users

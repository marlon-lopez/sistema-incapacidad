import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import { inputChangeHandler } from '../App'
import { UserContext } from '../context/UserContext'

const UserInfo = () => {
  const [selectedUser, setSeletedUser] = useState({})
  const { state, updateUser, getUser } = useContext(UserContext)

  const getUserReq = async (token, setInfo) => {
    try {
      const { data } = await axios.get('/api/v1/auth/me', {
        headers: { authorization: `Bearer ${token}` },
      })
      setInfo(data.data.user)
      getUser(data.data.user)
    } catch (err) {}
  }
  const submitHandler = async (e, token) => {
    e.preventDefault()
    console.log(selectedUser)
    /*  try {
        const { data } = await axios.post('/api/v1/auth/update', {
          headers: { authorization: `Bearer ${token}` },
        })
        console.log(data)
      } catch (err) {} */
  }
  useEffect(() => {
    getUserReq(state.token, setSeletedUser)
  }, [state])

  return (
    <div className='container'>
      {selectedUser && (
        <div className='profile'>
          <div className='div'>
            <h3>{selectedUser.name}</h3>
          </div>
        </div>
      )}
      <div className='edit-user'>
        <form onSubmit={submitHandler}>
          <label>
            New name
            <input
              type='text'
              name='name'
              value={selectedUser.name}
              onChange={(e) =>
                inputChangeHandler(e, selectedUser, setSeletedUser)
              }
            />
          </label>
          <label>
            New email
            <input
              type='text'
              name='email'
              value={selectedUser.email}
              onChange={(e) =>
                inputChangeHandler(e, selectedUser, setSeletedUser)
              }
            />
          </label>
          <label>
            New DUI
            <input
              type='text'
              name='dui'
              value={selectedUser.dui}
              onChange={(e) =>
                inputChangeHandler(e, selectedUser, setSeletedUser)
              }
            />
          </label>
          <label>
            New Job
            <input
              type='text'
              name='job'
              value={selectedUser.job}
              onChange={(e) =>
                inputChangeHandler(e, selectedUser, setSeletedUser)
              }
            />
          </label>
          <label>
            New code
            <input
              type='text'
              name='code'
              value={selectedUser.code}
              onChange={(e) =>
                inputChangeHandler(e, selectedUser, setSeletedUser)
              }
            />
          </label>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default UserInfo

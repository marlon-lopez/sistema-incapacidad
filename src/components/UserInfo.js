import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
//actions
import { updateUser, deleteMyUser } from '../context/actions/UserActions'

function UserInfo() {
  const [userInfo, setUserInfo] = useState(null)
  const [newUserInfo, setNewUserInfo] = useState(null)
  const { state, dispatch } = useContext(UserContext)

  const getUserReq = async (token) => {
    console.log(token)
    const { data } = await axios.get('/api/v1/auth/me', {
      headers: { authorization: `Bearer ${token}` },
    })
    setUserInfo(data.data.user)
    setNewUserInfo(data.data.user)
  }

  const userChangeHandler = (changes) => {
    setNewUserInfo({ ...newUserInfo, ...changes })
    console.log(userInfo)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    updateUser(dispatch, state.token, newUserInfo)
  }

  useEffect(() => {
    console.log(userInfo)
    console.log(state)
    getUserReq(state.token)
    return
  }, [state])
  return (
    <div>
      {userInfo && (
        <div className='profile'>
          <h4>{userInfo._id}</h4>
          <h4>{userInfo.name}</h4>
          <h4>{userInfo.email}</h4>
          <h4>{userInfo.job}</h4>
          <h4>{userInfo.dui}</h4>
          <h4>{userInfo.code}</h4>
          <h4>{userInfo.startDate}</h4>
        </div>
      )}
      {newUserInfo && (
        <div className='edit-form'>
          <form onSubmit={submitHandler}>
            <label>
              Email Address
              <input
                type='email'
                name='email'
                id='email'
                value={newUserInfo.email}
                onChange={(e) => {
                  userChangeHandler({ email: e.target.value })
                }}
              />
            </label>
            <label>
              Name
              <input
                type='text'
                name='name'
                id='name'
                value={newUserInfo.name}
                onChange={(e) => {
                  userChangeHandler({ name: e.target.value })
                }}
              />
            </label>
            <label>
              Job
              <input
                type='text'
                name='job'
                id='job'
                value={newUserInfo.job}
                onChange={(e) => {
                  userChangeHandler({ job: e.target.value })
                }}
              />
            </label>
            <label>
              DUI
              <input
                type='text'
                name='dui'
                id='dui'
                value={newUserInfo.dui}
                onChange={(e) => {
                  userChangeHandler({ dui: e.target.value })
                }}
              />
            </label>
            <label>
              code
              <input
                type='text'
                name='code'
                id='code'
                value={newUserInfo.code}
                onChange={(e) => {
                  userChangeHandler({ code: e.target.value })
                }}
              />
            </label>
            <button>Update</button>
          </form>
          <button onClick={() => deleteMyUser(dispatch, state.token)}>
            Eliminar mi Cuenta
          </button>
        </div>
      )}
    </div>
  )
}

export default UserInfo

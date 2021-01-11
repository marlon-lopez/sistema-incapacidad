import React, { useContext, useEffect, useState } from 'react'
import UserInfoEdit from './UserInfoEdit'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

import { parsedDate } from '../utils'

//styles
import styled from 'styled-components'
import { UserGrid } from './GlobalStyles'
//actions
import {
  getCurrentUser,
  updateUser,
  deleteMyUser,
} from '../context/actions/UserActions'

function UserInfo() {
  const [editing, setEditing] = useState(false)
  const [newUserInfo, setNewUserInfo] = useState(null)
  const { UserState, dispatch } = useContext(UserContext)
  const history = useHistory()

  const userChangeHandler = (changes) => {
    setEditing(true)
    setNewUserInfo({ ...newUserInfo, ...changes })
    document.body.style.overflow = 'hidden'
  }
  const deleteUserHandler = () => {
    deleteMyUser(dispatch, UserState.token)
    history.push('/login')
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    updateUser(dispatch, UserState.token, newUserInfo)
    setEditing(false)
  }

  useEffect(() => {
    getCurrentUser(dispatch, UserState.token)
    return () => {
      console.log('cleaned')
    }
  }, [dispatch, UserState.token])
  return (
    <UserContainer>
      {UserState.userDetails && (
        <StyledProfile>
          <h4>ID</h4>
          <p>{UserState.userDetails._id}</p>
          <h4>Nombre</h4>
          <p>{UserState.userDetails.name}</p>
          <h4>Correo Electronico</h4>
          <p>{UserState.userDetails.email}</p>
          <h4>Puesto de trabajo</h4>
          <p>{UserState.userDetails.job}</p>
          <h4>DUI</h4>
          <p>{UserState.userDetails.dui}</p>
          <h4>Codigo</h4>
          <p>{UserState.userDetails.code}</p>
          <h4>Fecha de Inicio</h4>
          <p>{parsedDate(UserState.userDetails.startDate)}</p>
          <div className='buttons'>
            <i className='fas fa-trash-alt' onClick={deleteUserHandler} />
            <i
              className='fas fa-pen'
              onClick={() => userChangeHandler({ ...UserState.userDetails })}
            />
          </div>
        </StyledProfile>
      )}

      {editing && (
        <UserInfoEdit
          userChangeHandler={userChangeHandler}
          newUserInfo={newUserInfo}
          submitHandler={submitHandler}
          deleteUserHandler={deleteUserHandler}
          setEditing={setEditing}
        />
      )}
    </UserContainer>
  )
}

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  position: relative;
`

const StyledProfile = styled(UserGrid)`
  width: 50%;
  max-width: 1000px;
  h4,
  p {
    align-self: center;
    margin-top: 10px;
  }
  .actions {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  i {
    width: 25px;
    height: 25px;
    margin: 10px 10px 0 0;
  }
  i:nth-child(1) {
    background: #ec4a4a;
  }
  i:nth-child(2) {
    background: #34a1de;
  }
`

export default UserInfo

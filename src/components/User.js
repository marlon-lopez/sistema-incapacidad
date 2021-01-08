import React, { useState } from 'react'

const User = ({ userInfo, selectedUserHandler, selectedUser }) => {
  console.log(userInfo)
  return (
    <div>
      <p>{userInfo.name}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.dui}</p>
    </div>
  )
}

export default User

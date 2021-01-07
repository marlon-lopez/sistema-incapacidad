import React from 'react'

const User = ({ user }) => {
  return (
    <div className='card'>
      <div className='userInfo'>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <p>user.id</p>
      </div>
    </div>
  )
}

export default User

import React, { useContext } from 'react'
//components
import User from '../components/User'
//context
import { UserContext } from '../context/UserContext'

const { state, dispatch } = useContext(UserContext)

const 


function Home() {
  return (
    <div>
      {!state.isAuthenticated ? (
        'Not authorized to access this information'
      ) : (
        <div className='user-list'>{

        }</div>
      )}
    </div>
  )
}

export default Home

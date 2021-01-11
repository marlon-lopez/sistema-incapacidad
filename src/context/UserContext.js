import React, { createContext, useReducer } from 'react'
//reducer
import reducer from './reducers/UserReducer'
export const UserContext = createContext({})

const userFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null
const tokenFromStorage = localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token'))
  : null

const initialState = {
  isAuthenticated: tokenFromStorage ? true : false,
  user: userFromStorage,
  token: tokenFromStorage,
  error: '',
  users: null,
  userDetails: null,
  success: false,
}

export const UserProvider = ({ children }) => {
  const [UserState, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ UserState, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

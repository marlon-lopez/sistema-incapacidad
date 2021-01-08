import React, { createContext, useReducer } from 'react'
//reducer
import reducer from './reducers/UserReducer'
export const UserContext = createContext({})

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

import React, { createContext, useReducer } from 'react'

export const UserContext = createContext({})

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOGOUT':
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      }
    case 'UPDATE_PROFILE':
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      }
    case 'USER_DETAIL':
      console.log(action.payload.user)
      return {
        ...state,
        user: action.payload.user,
      }
    case 'REGISTER':

    case 'DELETE_USER':

    case 'USER_LIST':

    default:
      return state
  }
}

export const UserProvider = ({ children }) => {
  const logIn = (data) => {
    dispatch({
      type: 'LOGIN',
      payload: data,
    })
  }

  const logOut = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
  }
  const getUser = (data) => {
    dispatch({
      type: 'USER_DETAIL',
      payload: data,
    })
  }

  const updateUser = (data) => {
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: data,
    })
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, logIn, logOut, getUser, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

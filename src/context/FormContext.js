import React, { createContext, useReducer } from 'react'
//reducer
import reducer from './reducers/FormReducer'
export const FormContext = createContext()

const initialState = {
  myForms: [],
  forms: [],
}

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

import React, { createContext, useReducer } from 'react'
//reducer
import reducer from './reducers/FormReducer'
export const FormContext = createContext()

const initialState = {
  myForms: [],
  forms: [],
  formDetails: null,
}

export const FormProvider = ({ children }) => {
  const [FormState, FormDispatch] = useReducer(reducer, initialState)
  return (
    <FormContext.Provider value={{ FormState, FormDispatch }}>
      {children}
    </FormContext.Provider>
  )
}

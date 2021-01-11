import React, { useContext, useEffect } from 'react'
//context
import { FormContext } from '../context/FormContext'
import { UserContext } from '../context/UserContext'
//actions
import { getAllForms } from '../context/actions/FormActions'
const Forms = () => {
  const { state } = useContext(UserContext)
  const { dispatch } = useContext(FormContext)
  useEffect(() => {
    getAllForms(dispatch, state.token)
    console.log('hh')
  }, [dispatch, state.token])
  return (
    <div>
      <div className='form-container'></div>
    </div>
  )
}

export default Forms

import React, { useContext, useEffect } from 'react'

//context
import { FormContext } from '../context/FormContext'
import { UserContext } from '../context/UserContext'

//actions
import { getMyForms } from '../context/actions/FormActions'

const MyForms = () => {
  const { state } = useContext(UserContext)
  const { dispatch } = useContext(FormContext)

  useEffect(() => {
    getMyForms(dispatch, state.token)
  }, [])
  return <div></div>
}

export default MyForms

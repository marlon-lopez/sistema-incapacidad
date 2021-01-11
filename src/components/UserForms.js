import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
//context
import { FormContext } from '../context/FormContext'
import { UserContext } from '../context/UserContext'
//actions
import {
  getUserForms,
  updateSingleForm,
  createForm,
  deleteForm,
} from '../context/actions/FormActions'
import Form from './Form'

import { countDays } from '../utils'

//styles
import styled from 'styled-components'
//components
import FormEditInfo from './FormEditInfo'
import CreateForm from './CreateForm'

const UserForms = () => {
  const [editing, setEditing] = useState(false)
  const [creating, setCreating] = useState(false)
  const [form, setForm] = useState(null)
  const [newFormInfo, setnewFormInfo] = useState(null)
  const { FormState, FormDispatch } = useContext(FormContext)
  const { UserState } = useContext(UserContext)
  const history = useHistory()
  const id = history.location.pathname.split('/')[2]

  //triggers once the edit button is clicked inside the Form component
  const selectFormHandler = (id) => {
    const selectedForm = FormState.forms.find((form) => form._id === id)
    setnewFormInfo(selectedForm)
    setEditing(true)
  }

  //handle the changes in the form
  const formChangeHandler = (changes) => {
    setEditing(true)
    setnewFormInfo({ ...newFormInfo, ...changes })
  }

  const submitHandler = (event, action) => {
    event.preventDefault()
    if (action === 'update') {
      updateSingleForm(
        FormDispatch,
        UserState.token,
        newFormInfo,
        newFormInfo._id,
      )
      setEditing(false)
    } else {
      setForm({
        ...form,
        days: countDays(form.startDate, form.endDate),
      })
      if (form.days) {
        createForm(FormDispatch, UserState.token, form)
        setCreating(false)
      }
    }
  }
  const deleteFormHandler = (id) => {
    deleteForm(FormDispatch, UserState.token, id, UserState.id)
  }

  useEffect(() => {
    getUserForms(FormDispatch, UserState.token, id, UserState.user.isAdmin)
    console.log('rendered')
    return () => {
      console.log('UserForms unmounted')
    }
  }, [
    FormState.formDetails,
    FormDispatch,
    UserState.token,
    id,
    creating,
    UserState.user.isAdmin,
  ])

  return (
    <Container>
      <FormsList>
        <>
          <div className='user-info'>
            {FormState.forms.length > 0 && (
              <>
                <h4>Nombre: </h4>
                <p>{FormState.forms[0].user.name}</p>
                <h4>Codigo: </h4>
                <p>{FormState.forms[0].user.code}</p>
              </>
            )}
            <CreateBtn onClick={() => setCreating(true)}>
              Crear Incapacidad
            </CreateBtn>
          </div>
        </>
        {FormState.forms.length > 0 &&
          FormState.forms.map((form) => {
            return (
              <Form
                formInfo={form}
                key={form._id}
                deleteFormHandler={deleteFormHandler}
                selectFormHandler={selectFormHandler}
              />
            )
          })}
      </FormsList>
      {editing && (
        <FormEditInfo
          formChangeHandler={formChangeHandler}
          newFormInfo={newFormInfo}
          submitHandler={submitHandler}
          deleteFormHandler={deleteFormHandler}
          setEditing={setEditing}
        />
      )}
      {creating && (
        <CreateForm
          form={form}
          setForm={setForm}
          setCreating={setCreating}
          submitHandler={submitHandler}
        />
      )}
    </Container>
  )
}
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const CreateBtn = styled.button`
  background: #ea4c89;
  border: none;
  border-radius: 5px;
  padding: 10px 5px;
  color: white;
  font-weight: bold;
`

const FormsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 20px;
  margin: 20px auto;
  justify-content: center;
  .user-info {
    display: flex;
    justify-content: space-between;
    grid-column: 1/4;
    p {
      margin: 0 15px;
    }
  }
`

export default UserForms

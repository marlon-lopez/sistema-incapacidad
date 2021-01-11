import axios from 'axios'

export const getAllForms = async (dispatch, token) => {
  try {
    const { data } = await axios.get('/api/v1/forms', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    console.log(data.data)
    dispatch({
      type: 'GET_ALL_FORMS',
      payload: data.data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUserForms = async (dispatch, token, id, isAdmin) => {
  try {
    if (isAdmin) {
      const { data } = await axios.get(`/api/v1/forms/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      dispatch({
        type: 'GET_USER_FORMS',
        payload: data.data,
      })
    } else {
      const { data } = await axios.get(`/api/v1/forms/mine`, {
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      dispatch({
        type: 'GET_USER_FORMS',
        payload: data.data,
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export const updateSingleForm = async (dispatch, token, newData, id) => {
  try {
    const { data } = await axios.put(`/api/v1/forms/${id}`, newData, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    console.log(data)
    dispatch({
      type: 'UPDATE_FORM',
      payload: data.data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const createForm = async (dispatch, token, form) => {
  try {
    const { data } = await axios.post('/api/v1/forms', form, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    console.log(data.data)
    dispatch({
      type: 'CREATE_FORM',
      payload: data.data,
    })
  } catch (err) {}
}

export const deleteForm = async (dispatch, token, id, userId) => {
  try {
    await axios.delete(`/api/v1/forms/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'DELETE_FORM',
      payload: {},
    })
  } catch (err) {}
}

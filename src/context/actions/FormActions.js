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

export const getMyForms = async (dispatch, token) => {
  try {
    const { data } = await axios.get('/api/v1/forms/mine', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    console.log(data.data)
    dispatch({
      type: 'GET_OWN_FORMS',
      payload: data.data,
    })
  } catch (err) {
    console.log(err)
  }
}

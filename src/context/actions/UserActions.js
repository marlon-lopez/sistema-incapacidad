import axios from 'axios'

export const logIn = async (dispatch, { email, password }) => {
  try {
    const { data } = await axios.post('/api/v1/auth/login', {
      email: email,
      password: password,
    })
    console.log(data.data)
    const dataParsed = await {
      user: {
        id: data.data._id,
        email: data.data.email,
        name: data.data.name,
        isAdmin: data.data.isAdmin,
      },
      token: data.data.token,
    }
    dispatch({
      type: 'LOGIN',
      payload: dataParsed,
    })
  } catch (err) {
    console.log(err)
  }
}

export const logOut = async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    payload: null,
  })
}

export const updateUser = async (dispatch, token, newData) => {
  try {
    const { data } = await axios.put('/api/v1/auth/update', newData, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export const registerUser = async (dispatch, userData) => {
  try {
    const { data } = await axios.post('/api/v1/auth/update', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    dispatch({
      type: 'RREGISTER',
      payload: data,
    })
  } catch (err) {}
}

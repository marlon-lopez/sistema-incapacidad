import axios from 'axios'

export const registerUser = async (dispatch, userData) => {
  try {
    const { data } = await axios.post('/api/v1/auth/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
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
      type: 'REGISTER',
      payload: dataParsed,
    })
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

export const logIn = async (dispatch, { email, password }) => {
  try {
    const { data } = await axios.post('/api/v1/auth/login', {
      email: email,
      password: password,
    })
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
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

export const logOut = async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    payload: null,
  })
}

export const getCurrentUser = async (dispatch, token) => {
  try {
    const { data } = await axios.get('/api/v1/auth/me', {
      headers: { authorization: `Bearer ${token}` },
    })
    dispatch({
      type: 'GET_SINGLE_USER',
      payload: data.data.user,
    })
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}
export const updateUser = async (dispatch, token, newData) => {
  try {
    const { data } = await axios.put('/api/v1/auth/update', newData, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const dataParsed = await {
      user: {
        id: data.data.user._id,
        email: data.data.user.email,
        name: data.data.user.name,
        isAdmin: data.data.user.isAdmin,
      },
    }
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { dataParsed, userDetails: data.data.user },
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

export const deleteMyUser = async (dispatch, token) => {
  try {
    await axios.delete('/api/v1/auth/me', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'DELETE_MY_USER',
      payload: {},
    })
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

/* ACTIONS FOR ADMIN*/

export const getAllUsers = async (dispatch, token) => {
  try {
    const { data } = await axios.get('/api/v1/auth/users', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'USER_LIST',
      payload: data.data,
    })
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

export const singleUser = async (dispatch, token, userId) => {
  try {
    const { data } = await axios.get(`/api/v1/auth/users/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: 'GET_SINGLE_USER', payload: data.data.user })
  } catch (err) {}
}

export const deleteUser = async (dispatch, token, userId) => {
  try {
    await axios.delete(`/api/v1/auth/users/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    dispatch({
      type: 'DELETE_USER',
      payload: {},
    })
    getAllUsers(dispatch, token)
  } catch (err) {
    dispatch({
      type: 'ERROR',
      payload: err.response.data.message,
    })
  }
}

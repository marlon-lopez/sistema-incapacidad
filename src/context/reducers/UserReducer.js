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
        error: null,
      }
    case 'LOGOUT':
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
        users: null,
      }
    case 'UPDATE_PROFILE':
      localStorage.setItem(
        'user',
        JSON.stringify(action.payload.dataParsed.user),
      )
      return {
        ...state,
        user: action.payload.dataParsed.user,
        userDetails: action.payload.userDetails,
      }
    case 'REGISTER':
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'DELETE_MY_USER':
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return {
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
        users: null,
      }
    case 'GET_SINGLE_USER':
      return {
        ...state,
        userDetails: action.payload,
      }

    /*REDUCER FOR ADMINS*/

    case 'USER_LIST':
      return {
        ...state,
        users: action.payload,
      }
    case 'UPDATE_USER':
      return {
        ...state,
      }

    case 'DELETE_USER': {
      return {
        ...state,
      }
    }
    case 'CREATE_USER':
      return {
        ...state,
      }

    default:
      return state
  }
}

export default reducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_FORM':
      return {
        ...state,
        myforms: action.payload,
      }
    case 'GET_ALL_FORMS':
      return {
        ...state,
        forms: action.payload,
      }
    case 'GET_USER_FORMS':
      return {
        ...state,
        forms: action.payload,
      }
    case 'UPDATE_FORM':
      return {
        ...state,
        formDetails: action.payload,
      }
    case 'DELETE_FORM':
      return {
        ...state,
        formDetails: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
export default reducer

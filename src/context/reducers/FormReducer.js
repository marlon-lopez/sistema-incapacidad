const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_OWN_FORMS':
      return {
        ...state,
        myForms: action.payload,
      }
    case 'CREATE_FORM':
      return {
        ...state,
        myforms: action.payload,
      }
    case 'GET_ALL_FORMS':
      return {
        ...state,
        forms: action.payload.forms,
      }
    default:
      return {
        ...state,
      }
  }
}
export default reducer

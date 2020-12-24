import { LoginTypes } from '../types/LoginTypes'

const initialState = {
  isAuthenticated: false,
  stillLoading: false,
}

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LoginTypes.LOGIN_SUCCESS:
      return { isAuthenticated: true, stillLoading: false }
    case LoginTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        stillLoading: false,
        errorMessage: action.message,
      }
    case LoginTypes.LOGIN_LOADING:
      return { ...state, stillLoading: true, isAuthenticated: false }
    default:
      return state
  }
}

export default loginReducer

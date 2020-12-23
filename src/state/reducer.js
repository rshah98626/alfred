import { combineReducers } from 'redux'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOADING } from './types'

// initial state
const initialState = {
  isAuthenticated: false,
  stillLoading: false,
}

function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { isAuthenticated: true, stillLoading: false }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        stillLoading: false,
        errorMessage: action.message,
      }
    case LOADING:
      return { ...state, stillLoading: true, isAuthenticated: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  login: login,
})

export default rootReducer

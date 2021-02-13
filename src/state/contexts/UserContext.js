import React, { createContext, useReducer } from 'react'
import loginReducer from '../reducers/LoginReducer'
import { LoginTypes } from '../types/LoginTypes'

const UserContext = createContext()

const initialState = {
  isAuthenticated: false,
  stillLoading: false,
  errorMessage: null,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  // create accessible actions that can be accessed from any component
  const contextValues = {
    isAuthenticated: state.isAuthenticated,
    stillLoading: state.stillLoading,
    errorMessage: state.errorMessage,
    loginSuccess: () => {
      dispatch({ type: LoginTypes.LOGIN_SUCCESS })
    },
    loginLoading: () => {
      dispatch({ type: LoginTypes.LOGIN_LOADING })
    },
    loginFailure: (errorMessage) => {
      dispatch({ type: LoginTypes.LOGIN_FAILURE, message: errorMessage })
    },
  }

  // embed children under Provider so can access context values
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }

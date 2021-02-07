import React from 'react'
import loginReducer from './reducers/LoginReducer'
import { LoginTypes } from './types/LoginTypes'

const UserContext = React.createContext()

const initialState = {
  isAuthenticated: false,
  stillLoading: false,
  errorMessage: null,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(loginReducer, initialState)

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

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }

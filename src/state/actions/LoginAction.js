import { LoginTypes } from '../types/LoginTypes'
import { UserServices } from '../../services'

function loginAction(username, password) {
  // And then creates and returns the async thunk function:
  return async function loginThunk(dispatch) {
    // Now we can call the server
    dispatch({ type: LoginTypes.LOGIN_LOADING })
    await UserServices.login(username, password)
      .then(() => {
        dispatch({ type: LoginTypes.LOGIN_SUCCESS })
      })
      .catch((err) => {
        dispatch({ type: LoginTypes.LOGIN_FAILURE, message: err.message })
      })
  }
}

export default loginAction

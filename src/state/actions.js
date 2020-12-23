import { LOADING, LOGIN_FAILURE, LOGIN_SUCCESS } from './types'
import { UserServices } from '../services/userServices'

// Write a synchronous outer function that receives the `text` parameter:
function loginAction(username, password) {
  // And then creates and returns the async thunk function:
  return async function loginThunk(dispatch) {
    // Now we can use the text value and send it to the server
    dispatch({ type: LOADING })
    await UserServices.login(username, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, message: err.message })
      })
  }
}

const actionCreators = {
  loginAction,
}

export { actionCreators }

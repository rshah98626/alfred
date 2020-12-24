import { combineReducers } from 'redux'
import loginReducer from './LoginReducer'
import getFeedReducer from './GetFeedReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  getFeed: getFeedReducer,
})

export default rootReducer

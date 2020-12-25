import { GetFeedTypes } from '../types/GetFeedTypes'

const initialState = {
  feedLoading: false,
  feedRetrievalFailed: false,
  response: [],
}

const getFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetFeedTypes.GET_FEED_SUCCESS:
      return {
        response: action.posts,
        feedLoading: false,
        feedRetrievalFailed: false,
      }
    case GetFeedTypes.GET_FEED_FAILURE:
      return { ...state, feedLoading: false, feedRetrievalFailed: true }
    case GetFeedTypes.GET_FEED_LOADING:
      return { ...state, feedLoading: true, feedRetrievalFailed: false }
    default:
      return state
  }
}

export default getFeedReducer

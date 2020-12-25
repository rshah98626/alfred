import { GetFeedTypes } from '../types/GetFeedTypes'
import { DataServices } from '../../services'

function getFeedAction() {
  return async function getFeedThunk(dispatch) {
    dispatch({ type: GetFeedTypes.GET_FEED_LOADING })
    await DataServices.getFeed()
      .then((data) => {
        dispatch({ type: GetFeedTypes.GET_FEED_SUCCESS, posts: data })
      })
      .catch((err) => {
        console.error(err.message)
        dispatch({ type: GetFeedTypes.GET_FEED_FAILURE })
      })
  }
}

export default getFeedAction

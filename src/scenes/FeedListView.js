import React, { useEffect, useState } from 'react'
import { DataServices } from '../services'
import Feed from '../commonComponents/Feed'

const FeedListView = ({ navigation }) => {
  const [state, setState] = useState({
    feedData: null,
    isFeedLoading: true,
    errorMessage: null,
  })

  // make network call to retreive feed
  useEffect(() => {
    // use var to cancel component update if component is unmounted
    let isSubscribed = true

    DataServices.getFeed()
      .then((data) =>
        isSubscribed
          ? setState({
              feedData: data.posts,
              isFeedLoading: false,
              errorMessage: null,
            })
          : null
      )
      .catch((err) =>
        isSubscribed
          ? setState((prevState) => ({
              ...prevState,
              isFeedLoading: false,
              errorMessage: err.message,
            }))
          : null
      )

    // cleanup function
    return () => (isSubscribed = false)
  }, [])

  return <Feed feedData={state.feedData} navigation={navigation} />
}

export default FeedListView

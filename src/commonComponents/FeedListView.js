import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native'
import Post from '../commonComponents/Post'
import { DataServices } from '../services'

const FeedListView = ({ navigation }) => {
  const [state, setState] = useState({
    feedData: null,
    isFeedLoading: true,
    errorMessage: null,
  })

  useEffect(() => {
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

    return () => (isSubscribed = false)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={state.feedData}
        renderItem={({ item }) => (
          <Post postData={item} navigation={navigation} />
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFF',
  },
})

export default FeedListView

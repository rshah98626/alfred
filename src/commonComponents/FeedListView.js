import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state/actions'
import Post from '../commonComponents/Post'

const FeedListView = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      dispatch(actionCreators.getFeedAction())
    }
    fetchData()
    return
  }, [])

  const feedData = useSelector((state) => state.getFeed.response.posts)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedData}
        renderItem={({ item }) => <Post postData={item} />}
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

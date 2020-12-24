import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state/actions'

const HomeView = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchData() {
      dispatch(actionCreators.getFeedAction())
    }
    fetchData()
    let hi = false
    return //() => { hi = true }
  }, [])
  const feedData = useSelector((state) => state.getFeed.posts)

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>{feedData ? feedData.posts[0].message : 'No feed data'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeView

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { useEffect } from 'react/cjs/react.development'

const ArticleDetailView = ({ route, navigation }) => {
  const { postId } = route.params
  const currentPost = useSelector((state) =>
    state.getFeed.response.posts.find((it) => it.id === postId)
  )

  // Show pop up if incorrect post found
  useEffect(() => {
    if (!currentPost) {
      console.error('Post unable to be found on detailed page')
      Alert.alert(
        'Error',
        'Post is unable to be found',
        [{ text: 'OK', onPress: () => navigation.goBack() }],
        { cancelable: false }
      )
    }
    return
  }, [currentPost, postId])

  return (
    <View style={styles.container}>
      <Text>Article Screen</Text>
      <Text>{currentPost.articles[0].text}</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
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

export default ArticleDetailView

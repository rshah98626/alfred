import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const Post = ({ postData, navigation }) => {
  const dateString = new Date(postData.created_at).toLocaleString()
  const onPressHandler = () => {
    if (postData.articles.length > 0) {
      navigation.navigate('Article', { postId: postData.id })
    }
  }

  return (
    <Pressable style={styles.item} onPress={onPressHandler}>
      <Text>{dateString}</Text>
      <Text style={styles.title}>{postData.fund.name}</Text>
      <Text>{postData.message}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

export default Post

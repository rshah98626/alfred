import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const Post = ({ postData, navigation }) => {
  const dateString = new Date(postData.created_at).toLocaleString()
  const onPressHandler = () => {
    if (postData.articles.length > 0) {
      navigation.navigate('Article', { currentPost: postData })
    }
  }

  return (
    <Pressable style={styles.item} onPress={onPressHandler}>
      <Text style={styles.supportingText}>{dateString}</Text>
      <Text style={styles.title}>{postData.fund.name}</Text>
      <Text style={styles.supportingText}>{postData.message}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#5765ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  supportingText: {
    color: 'white',
  },
})

export default Post

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Post = ({ postData }) => {
  const dateString = new Date(postData.created_at).toLocaleString()

  return (
    <View style={styles.item}>
      <Text>{dateString}</Text>
      <Text style={styles.title}>{postData.fund.name}</Text>
      <Text>{postData.message}</Text>
    </View>
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

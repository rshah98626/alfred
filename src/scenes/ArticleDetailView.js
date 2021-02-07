import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

const ArticleDetailView = ({ route, navigation }) => {
  const { currentPost } = route.params

  // Show pop up if incorrect post found
  React.useEffect(() => {
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
  }, [currentPost])

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

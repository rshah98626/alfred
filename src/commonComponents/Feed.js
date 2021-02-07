import { SafeAreaView, StyleSheet, FlatList, StatusBar } from 'react-native'
import Post from '../commonComponents/Post'

const Feed = ({ feedData, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedData}
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

export default Feed

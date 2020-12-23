import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SplashView = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
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

export default SplashView

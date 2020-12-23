import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FundsList = () => {
  return (
    <View style={styles.container}>
      <Text>Fund List Screen</Text>
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

export default FundsList

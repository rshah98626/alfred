import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const CauseLabel = ({ id, label, onPressCallback }) => {
  const [isTapped, setTapped] = useState(false)

  const onPress = () => {
    let notIsTapped = !isTapped
    setTapped(notIsTapped)
    onPressCallback(id, notIsTapped)
  }

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#212529',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  text: {
    color: '#fff',
  },
})

export default CauseLabel

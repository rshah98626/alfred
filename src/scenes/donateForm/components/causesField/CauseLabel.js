import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const CauseLabel = ({ id, label, onPressCallback, isSelected }) => {
  const [isTapped, setTapped] = useState(isSelected)

  const onPress = () => {
    let notIsTapped = !isTapped
    setTapped(notIsTapped)
    onPressCallback(id, notIsTapped)
  }

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          isTapped ? styles.selectedButton : styles.unSelectedButton,
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: 'red',
  },
  unSelectedButton: {
    backgroundColor: '#212529',
  },

  text: {
    color: '#fff',
  },
})

export default CauseLabel

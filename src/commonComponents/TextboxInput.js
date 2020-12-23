import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const TextboxInput = ({ placeholder, isSecure, onChangeCallback }) => {
  const [text, setText] = useState('')
  const onChange = (text) => {
    setText(text)
    onChangeCallback(text)
  }

  return (
    <TextInput
      autoCapitalize="none"
      style={styles.textBox}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
      secureTextEntry={isSecure}
    />
  )
}

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    backgroundColor: 'orange',
    width: '50%',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
})

export default TextboxInput

import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const CausesField = ({ control, causes }) => {
  const initialCausesState = causes.map((val) => {
    return { ...val, selected: false }
  })

  return (
    <View>
      <Text>What issues do you care about?</Text>
      <Controller
        name="causes"
        defaultValue={initialCausesState}
        control={control}
        render={({ onChange }) => (
          <CausesOrchestrator
            causes={causes}
            onChange={onChange}
            initialState={initialCausesState}
          />
        )}
      />
    </View>
  )
}

const CausesOrchestrator = ({ causes, onChange, initialState }) => {
  const [state, setState] = useState(initialState)

  const causePressed = (id, isSelected) => {
    let newState = state.map((cause) =>
      cause.id === id ? { ...cause, selected: isSelected } : cause
    )
    setState(newState)
    onChange(newState)
  }

  return causes.map((val) => {
    return (
      <CauseLabel
        key={val.id}
        id={val.id}
        label={val.cause}
        onPressCallback={causePressed}
      />
    )
  })
}

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

export default CausesField

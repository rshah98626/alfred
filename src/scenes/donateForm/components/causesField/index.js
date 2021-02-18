import React from 'react'
import { Controller } from 'react-hook-form'
import { View, Text } from 'react-native'
import CausesOrchestrator from './CausesOrchestrator'

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

export default CausesField

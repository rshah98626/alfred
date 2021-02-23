import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Text } from 'react-native'
import CausesOrchestrator from './CausesOrchestrator'
import BasicButton from '../../../../commonComponents/BasicButton'

const CausesField = ({ store, updateStore, previousField, nextField }) => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    updateStore({ ...store, causes: data.causes })
  }

  const nextButtonOnPress = () => {
    handleSubmit(onSubmit)
    nextField()
  }

  return (
    <View>
      <BasicButton onPressCallback={previousField} title={'Previous Field'} />
      <Text>What issues do you care about?</Text>
      <Controller
        name="causes"
        defaultValue={store.causes}
        control={control}
        render={({ onChange }) => (
          <CausesOrchestrator onChange={onChange} initialState={store.causes} />
        )}
      />
      <BasicButton
        onPressCallback={handleSubmit(onSubmit)}
        title={'Set Causes'}
      />
    </View>
  )
}

export default CausesField

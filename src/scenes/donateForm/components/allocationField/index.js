import React from 'react'
import BasicButton from '../../../../commonComponents/BasicButton'
import { Text } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import AllocationOrchestrator from './AllocationOrchestrator'

const AllocationField = ({ store, updateStore, nextField, previousField }) => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    updateStore({ ...store, causes: data.allocation })
    nextField()
  }

  return (
    <>
      <BasicButton onPressCallback={previousField} title={'Go Back'} />
      <Text>How would you like to distribute your donation?</Text>
      <Controller
        name="allocation"
        defaultValue={store.causes}
        control={control}
        render={({ onChange }) => (
          <AllocationOrchestrator
            onChange={onChange}
            storeState={store.causes}
            totalAmount={store.amount}
          />
        )}
      />
      <BasicButton
        onPressCallback={handleSubmit(onSubmit)}
        title={'Log Data'}
      />
    </>
  )
}

export default AllocationField

import React from 'react'
import TextboxInput from '../../../commonComponents/TextboxInput'
import { Controller, useForm } from 'react-hook-form'
import { Text } from 'react-native'
import BasicButton from '../../../commonComponents/BasicButton'

const AmountField = ({ store, updateStore }) => {
  const { handleSubmit, control } = useForm()

  const parseAmount = (stringNumber) => {
    let val = parseInt(stringNumber)
    return isNaN(val) ? 0 : val
  }

  const onSubmit = (data) => {
    //updateStore({ ...store, ...data })
    updateStore({ ...store, amount: data.amount })
  }

  return (
    <>
      <Text>How much do you want to donate today?</Text>
      <Controller
        defaultValue={store.amount}
        name="amount"
        control={control}
        render={({ onChange }) => (
          <TextboxInput
            onChangeCallback={(stringNumber) =>
              onChange(parseAmount(stringNumber))
            }
            placeholder={'Amount'}
            keyboardType={'number-pad'}
          />
        )}
      />
      <BasicButton
        onPressCallback={handleSubmit(onSubmit)}
        title={'Set Amount'}
      />
    </>
  )
}

export default AmountField

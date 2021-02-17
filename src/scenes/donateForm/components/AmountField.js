import React from 'react'
import TextboxInput from '../../../commonComponents/TextboxInput'
import { Controller } from 'react-hook-form'
import { Text } from 'react-native'

const AmountField = ({ control }) => {
  const DEFAULT_DONATION_AMOUNT = 0

  const onChangeCallback = (stringNumber, onChange) => {
    let val = parseInt(stringNumber)
    onChange(isNaN(val) ? DEFAULT_DONATION_AMOUNT : val)
  }

  return (
    <>
      <Text>How much do you want to donate today?</Text>
      <Controller
        defaultValue={DEFAULT_DONATION_AMOUNT}
        name="amount"
        control={control}
        render={({ onChange }) => (
          <TextboxInput
            onChangeCallback={(stringNumber) =>
              onChangeCallback(stringNumber, onChange)
            }
            placeholder={'Amount'}
            keyboardType={'number-pad'}
          />
        )}
      />
    </>
  )
}

export default AmountField

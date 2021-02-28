import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import AmountField from './components/AmountField'
import CausesField from './components/causesField'
import AllocationField from './components/AllocationField'

const DonateFormView = () => {
  const [step, setStep] = useState(0)
  const incrementStep = () => setStep(step + 1)
  const decrementStep = () => setStep(step - 1)

  const onSubmit = () => {
    console.log(store)
  }

  const DEFAULT_DONATION_AMOUNT = 0
  const initialState = {
    amount: DEFAULT_DONATION_AMOUNT,
    causes: causes.map((val) => {
      return { ...val, selected: false, allocationAmount: 0 }
    }),
  }
  const [store, setStore] = useState(initialState)

  const formPages = [
    <AmountField
      store={store}
      updateStore={setStore}
      nextField={incrementStep}
    />,
    <CausesField
      store={store}
      updateStore={setStore}
      previousField={decrementStep}
      nextField={incrementStep}
    />,
    <AllocationField
      store={store}
      updateStore={setStore}
      nextField={onSubmit}
      previousField={decrementStep}
    />,
  ]

  return <View style={styles.container}>{formPages[step]}</View>
}

const causes = [
  {
    cause: 'Civil Rights',
    id: 1,
  },
  {
    cause: 'Children',
    id: 2,
  },
  {
    cause: 'Hunger',
    id: 3,
  },
  {
    cause: 'Housing',
    id: 4,
  },
  {
    cause: 'Animal Welfare',
    id: 5,
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DonateFormView

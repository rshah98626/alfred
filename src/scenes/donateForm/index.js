import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useForm } from 'react-hook-form'
import BasicButton from '../../commonComponents/BasicButton'
import AmountField from './components/AmountField'
import CausesField from './components/causesField'

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
      return { ...val, selected: false }
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
    <FinalField onPress={onSubmit} back={decrementStep} />,
  ]

  return <View style={styles.container}>{formPages[step]}</View>
}

const FinalField = ({ onPress, back }) => {
  return (
    <>
      <BasicButton onPressCallback={back} title={'Go Back'} />
      <Text>FINAL FIELD</Text>
      <BasicButton onPressCallback={onPress} title={'Log Data'} />
    </>
  )
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

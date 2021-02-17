import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useForm } from 'react-hook-form'
import BasicButton from '../../commonComponents/BasicButton'
import AmountField from './components/AmountField'
import CausesField from './components/CausesField'

const DonateFormView = () => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <AmountField control={control} />
      <CausesField control={control} causes={causes} />
      <BasicButton onPressCallback={handleSubmit(onSubmit)} title={'Submit'} />
    </View>
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

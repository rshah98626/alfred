import React, { useState } from 'react'
import BasicButton from '../../../commonComponents/BasicButton'
import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'
import { useForm, Controller } from 'react-hook-form'

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

const AllocationOrchestrator = ({ onChange, storeState, totalAmount }) => {
  const roundToNearestHundredth = (num) =>
    Math.round((num + Number.EPSILON) * 100) / 100

  const rebalanceMoney = (total, numParties) => {
    let roundedValue = roundToNearestHundredth(total / numParties)
    let remainder = roundToNearestHundredth(roundedValue * numParties - total)
    let balancingValue =
      remainder < 0 ? roundedValue + 0.01 : roundedValue - 0.01
    let numBalancing = Math.abs(remainder * 100)
    return Array(numParties - numBalancing)
      .fill(roundedValue)
      .concat(Array(numBalancing).fill(balancingValue))
  }

  const createInitialState = () => {
    let selectedCauses = storeState.filter(({ selected }) => selected === true)
    let amounts = rebalanceMoney(totalAmount, selectedCauses.length)
    return selectedCauses.map(({ id, cause }, idx) => {
      return {
        id: id,
        cause: cause,
        allocationAmount: amounts[idx],
      }
    })
  }

  const [state, setState] = useState(createInitialState())

  return state.map(({ id, cause, allocationAmount }) => {
    return (
      <AllocationSlider
        key={id}
        causeLabel={cause}
        initialValue={allocationAmount}
        maxValue={totalAmount}
      />
    )
  })
}

const AllocationSlider = ({ maxValue, initialValue, causeLabel }) => {
  const [sliderValue, setSliderValue] = useState(initialValue)

  const slidingChanged = (num) =>
    setSliderValue(Math.round((num + Number.EPSILON) * 100) / 100)

  return (
    <>
      <Slider
        style={{ width: 200 }}
        maximumValue={maxValue}
        minimumValue={0}
        value={initialValue}
        onValueChange={slidingChanged}
        step={0.01}
      />
      <Text>
        {causeLabel}: ${sliderValue}
      </Text>
    </>
  )
}

export default AllocationField

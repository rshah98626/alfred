import React, { useState } from 'react'
import Slider from '@react-native-community/slider'
import { Text } from 'react-native'
import { roundToNearestHundredth } from './helpers'

const AllocationSlider = ({ maxValue, value, causeLabel, onChange, id }) => {
  const slidingChanged = (num) => onChange(id, roundToNearestHundredth(num))

  return (
    <>
      <Slider
        style={{ width: 200 }}
        maximumValue={maxValue}
        minimumValue={0}
        value={value}
        onValueChange={slidingChanged}
        step={0.01}
      />
      <Text>
        {causeLabel}: ${value}
      </Text>
    </>
  )
}

export default AllocationSlider

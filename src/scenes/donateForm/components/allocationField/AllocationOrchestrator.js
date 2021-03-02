import React, { useState } from 'react'
import { rebalanceMoney, roundToNearestHundredth } from './helpers'
import AllocationSlider from './AllocationSlider'

const AllocationOrchestrator = ({ onChange, storeState, totalAmount }) => {
  const createInitialState = () => {
    let selectedCauses = storeState.filter(({ selected }) => selected)
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

  const sliderValueChanged = (sliderId, newValue) => {
    let numOtherSliders = state.length - 1

    // calculate maximum value slider can change by
    let sliderChangeUpperBound = roundToNearestHundredth(
      (Math.min(
        ...state
          .filter(({ id }) => id !== sliderId)
          .map((t) => t.allocationAmount)
      ) -
        0.01) *
        numOtherSliders
    )

    // cap new slider value at upper bound
    let oldSliderValue = state.find(({ id }) => id === sliderId)
      .allocationAmount
    let sliderChangeValue =
      oldSliderValue + sliderChangeUpperBound < newValue
        ? oldSliderValue + sliderChangeUpperBound
        : newValue

    // rebalance to calculate other slider values
    let otherValues = rebalanceMoney(
      oldSliderValue - sliderChangeValue,
      numOtherSliders
    )

    // assign other slider values
    setState(
      state.map((cause) => ({
        ...cause,
        allocationAmount:
          cause.id === sliderId
            ? newValue
            : roundToNearestHundredth(
                cause.allocationAmount + otherValues.pop()
              ),
      }))
    )
  }

  return state.map(({ id, cause, allocationAmount }) => {
    return (
      <AllocationSlider
        key={id}
        id={id}
        causeLabel={cause}
        value={allocationAmount}
        maxValue={totalAmount - (state.length - 1) * 0.01}
        onChange={sliderValueChanged}
      />
    )
  })
}

export default AllocationOrchestrator

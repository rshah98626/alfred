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
    // try rebalancing
    let oldSliderValue = state.find(({ id }) => id === sliderId)
      .allocationAmount
    var otherValues = rebalanceMoney(
      oldSliderValue - newValue,
      state.length - 1
    )

    let newState = state.map((cause) => {
      return {
        ...cause,
        allocationAmount:
          cause.id === sliderId
            ? newValue
            : roundToNearestHundredth(
                cause.allocationAmount + otherValues.pop()
              ),
      }
    })

    setState(newState)
  }

  return state.map(({ id, cause, allocationAmount }) => {
    return (
      <AllocationSlider
        key={id}
        id={id}
        causeLabel={cause}
        value={allocationAmount}
        maxValue={totalAmount}
        onChange={sliderValueChanged}
      />
    )
  })
}

export default AllocationOrchestrator

import React, { useState } from 'react'
import CauseLabel from './CauseLabel'

const CausesOrchestrator = ({ causes, onChange, initialState }) => {
  const [state, setState] = useState(initialState)

  const causePressed = (id, isSelected) => {
    let newState = state.map((cause) =>
      cause.id === id ? { ...cause, selected: isSelected } : cause
    )
    setState(newState)
    onChange(newState)
  }

  return causes.map((val) => {
    return (
      <CauseLabel
        key={val.id}
        id={val.id}
        label={val.cause}
        onPressCallback={causePressed}
      />
    )
  })
}

export default CausesOrchestrator

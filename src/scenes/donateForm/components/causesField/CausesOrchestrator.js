import React, { useState } from 'react'
import CauseLabel from './CauseLabel'

const CausesOrchestrator = ({ onChange, initialState }) => {
  const [state, setState] = useState(initialState)

  const causePressed = (id, isSelected) => {
    let newState = state.map((cause) =>
      cause.id === id ? { ...cause, selected: isSelected } : cause
    )
    setState(newState)
    onChange(newState)
  }

  return initialState.map(({ id, cause, selected }) => {
    return (
      <CauseLabel
        key={id}
        id={id}
        label={cause}
        isSelected={selected}
        onPressCallback={causePressed}
      />
    )
  })
}

export default CausesOrchestrator

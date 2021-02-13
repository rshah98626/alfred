import React from 'react'
import { ActivityIndicator, Button } from 'react-native'

const BasicButton = ({ onPressCallback, title, isLoading }) => {
  if (isLoading) {
    return <ActivityIndicator color="#FFF" size="large" />
  } else {
    return (
      <Button
        onPress={onPressCallback}
        title={title}
        color="#000"
        accessibilityLabel={title}
      />
    )
  }
}

export default BasicButton

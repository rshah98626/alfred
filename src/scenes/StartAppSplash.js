import React, { useRef, useEffect } from 'react'
import { Animated, Image, View, StyleSheet } from 'react-native'

const StartAppSplash = ({ onAnimationFinished }) => {
  useEffect(() => fadeOut(), [])

  const fadeAnim = useRef(new Animated.Value(1)).current

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => onAnimationFinished())
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Image source={require('../../assets/startSplash.png')} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default StartAppSplash

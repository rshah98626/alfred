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
        <Image
          source={require('../../assets/startSplash.png')}
          style={styles.image}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
})

export default StartAppSplash

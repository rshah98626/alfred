import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import BasicButton from '../commonComponents/BasicButton'
import TextboxInput from '../commonComponents/TextboxInput'
import { UserServices } from '../services'
import { UserContext } from '../state/contexts/UserContext'

const LoginView = () => {
  const { loginSuccess, loginLoading, loginFailure, stillLoading } = useContext(
    UserContext
  )

  const [usernameText, setUsernameText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  useEffect(() => {
    let isSubscribed = true

    if (isButtonPressed) {
      console.log('Login button pressed')
      loginLoading()
      UserServices.login(usernameText, passwordText)
        .then(() => (isSubscribed ? loginSuccess() : null))
        .catch((err) => (isSubscribed ? loginFailure(err.message) : null))
    }

    return () => (isSubscribed = false)
  }, [isButtonPressed])

  return (
    <View style={styles.container}>
      <TextboxInput
        placeholder="Username"
        isSecure={false}
        onChangeCallback={setUsernameText}
      />
      <TextboxInput
        placeholder="Password"
        isSecure={true}
        onChangeCallback={setPasswordText}
      />
      <BasicButton
        onPressCallback={() => {
          setIsButtonPressed(true)
        }}
        title="Login"
        isLoading={stillLoading}
      />
      <StatusBar style="auto" />
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
})

export default LoginView

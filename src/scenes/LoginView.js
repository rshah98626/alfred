import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BasicButton from '../commonComponents/LoginButton'
import TextboxInput from '../commonComponents/TextboxInput'
import { actionCreators } from '../state/actions'

const LoginView = () => {
  const [usernameText, setUsernameText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  const dispatch = useDispatch()
  const loginButtonCallback = () => {
    console.log('Login button pressed')
    dispatch(actionCreators.loginAction(usernameText, passwordText))
  }
  const stillLoading = useSelector((state) => state.login.stillLoading)

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
        onPressCallback={loginButtonCallback}
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LoginView

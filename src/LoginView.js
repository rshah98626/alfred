import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import BasicButton from './LoginButton'
import TextboxInput from './TextboxInput'
import { actionCreators } from './actions'
import { connect } from 'react-redux'

const LoginView = (props) => {
  const [usernameText, setUsernameText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  const loginButtonCallback = () => {
    console.log('Login button pressed')
    props.loginAction(usernameText, passwordText)
  }

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
        title="Login Button"
        isLoading={props.login.isLoading}
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

const actions = {
  loginAction: actionCreators.loginAction,
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, actions)(LoginView)

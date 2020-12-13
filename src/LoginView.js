import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginButton from './LoginButton';
import TextboxInput from './TextboxInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_KEY = 'LOGIN_KEY';
const baseURL = 'http://localhost:8000';

const login = (username, password) => {
  fetch(baseURL + '/api/v1/auth/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then((resp) => resp.json())
  .then((json) => {
    console.log('Trying to store auth token')
    storeToken(json.key)
  })
  .catch((error) => {
    console.error(error)
  });
};

const storeToken = (value) => {
  AsyncStorage.setItem(LOGIN_KEY, value)
  .then(() => {
    console.log('Stored token')
  })
  .catch((error) => {
    console.error(error)
  })
};

const LoginView = () => {
  const [usernameText, setUsernameText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  const loginButtonCallback = () => {
    console.log('Login button pressed')
    login(usernameText, passwordText)
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
      <LoginButton 
        onPressCallback={loginButtonCallback}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginView;
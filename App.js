import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import LoginView from './src/LoginView'
import { store } from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from './src/SplashScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const stillLoading = useSelector((state) => state.login.stillLoading)
  const errorMessage = useSelector((state) => state.login.errorMessage)

  if (stillLoading) {
    console.log('LOADING')
  }
  if (isAuthenticated) {
    console.log('WE GOT THE RIGHT STATE')
  }
  if (errorMessage) {
    console.log(errorMessage)
    console.log('FAILED LOGIN')
  }
  return (
    <NavigationContainer>
      <LoginView />
    </NavigationContainer>
  )
}

const Root = () => {
  useEffect(() => console.log('INITIALIZED APP'), [])
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <App />
      {/*</PersistGate>*/}
    </Provider>
  )
}

export default Root

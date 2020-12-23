import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashView from '../scenes/SplashView'
import LoginView from '../scenes/LoginView'

const Stack = createStackNavigator()

const UnprotectedRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Splash" component={SplashView} />
    </Stack.Navigator>
  )
}

export default UnprotectedRoutes

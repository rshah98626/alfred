import React from 'react'
import SplashView from './SplashView'
import { createStackNavigator } from '@react-navigation/stack'
import LoginView from './LoginView'

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

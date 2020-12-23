import React from 'react'
import HomeView from '../scenes/HomeView'
import SettingsView from '../scenes/SettingsView'
import FundsListView from '../scenes/FundsListView'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const ProtectedRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen
        name="Fund List"
        component={FundsListView}
        options={{ tabBarLabel: 'Funds' }}
      />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  )
}

export default ProtectedRoutes

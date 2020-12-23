import React from 'react'
import HomeView from './HomeView'
import SettingsView from './SettingsView'
import FundsList from './FundList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const ProtectedRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen
        name="Fund List"
        component={FundsList}
        options={{ tabBarLabel: 'Funds' }}
      />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  )
}

export default ProtectedRoutes

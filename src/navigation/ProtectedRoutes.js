import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsView from '../scenes/SettingsView'
import FundsListView from '../scenes/FundsListView'
import FeedListView from '../scenes/FeedListView'
import ArticleDetailView from '../scenes/ArticleDetailView'

const Stack = createStackNavigator()

const ProtectedRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Feed" component={FeedListView} />
      <Stack.Screen name="Article" component={ArticleDetailView} />
      <Stack.Screen name="Fund Search" component={FundsListView} />
      <Stack.Screen name="Settings" component={SettingsView} />
    </Stack.Navigator>
  )
}

export default ProtectedRoutes

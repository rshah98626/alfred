import React, { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import ProtectedRoutes from './src/ProtectedRoutes'
import UnprotectedRoutes from './src/UnprotectedRoutes'

const App = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const stillLoading = useSelector((state) => state.login.stillLoading)
  const errorMessage = useSelector((state) => state.login.errorMessage)

  if (stillLoading) {
    console.log('LOADING')
  }
  if (errorMessage) {
    console.log(errorMessage)
    console.log('FAILED LOGIN')
  }
  return (
    <NavigationContainer>
      {isAuthenticated ? <ProtectedRoutes /> : <UnprotectedRoutes />}
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

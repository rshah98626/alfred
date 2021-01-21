import React, { useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/state/store'
import { NavigationContainer } from '@react-navigation/native'
import ProtectedRoutes from './src/navigation/ProtectedRoutes'
import UnprotectedRoutes from './src/navigation/UnprotectedRoutes'
import StartAppSplash from './src/scenes/StartAppSplash'

const App = ({ isInit }) => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const stillLoading = useSelector((state) => state.login.stillLoading)
  const errorMessage = useSelector((state) => state.login.errorMessage)

  const [showSplash, setShowSplash] = useState(isInit)

  if (stillLoading) {
    console.log('LOADING')
  }
  if (errorMessage) {
    console.log(errorMessage)
    console.log('FAILED LOGIN')
  }
  return (
    <>
      {showSplash ? (
        <StartAppSplash onAnimationFinished={() => setShowSplash(false)} />
      ) : (
        <NavigationContainer>
          {isAuthenticated ? <ProtectedRoutes /> : <UnprotectedRoutes />}
        </NavigationContainer>
      )}
    </>
  )
}

const Root = () => {
  const [isInit, setIsInit] = useState(true)
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <App isInit={isInit} />
      {/*</PersistGate>*/}
    </Provider>
  )
}

export default Root

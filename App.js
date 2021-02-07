import React, { useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/state/store'
import { NavigationContainer } from '@react-navigation/native'
import ProtectedRoutes from './src/navigation/ProtectedRoutes'
import UnprotectedRoutes from './src/navigation/UnprotectedRoutes'
import StartAppSplash from './src/scenes/StartAppSplash'
import { UserContext, UserProvider } from './src/state/UserContext'

const App = ({ isInit }) => {
  const { isAuthenticated, stillLoading, errorMessage } = React.useContext(
    UserContext
  )

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
    // <Provider store={store}>
    <UserProvider>
      <App isInit={isInit} />
    </UserProvider>
    // </Provider>
  )
}

export default Root

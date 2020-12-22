import React from 'react';
import { Provider, useSelector } from 'react-redux';
import LoginView from './src/LoginView';
import { store } from './src/store';


const App = () => {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated)
  const stillLoading = useSelector(state => state.login.stillLoading)
  const errorMessage = useSelector(state => state.login.errorMessage)
  
  if (stillLoading) {
    console.log("LOADING")
  }
  if (isAuthenticated) {
    console.log("WE GOT THE RIGHT STATE")
  }
  if (errorMessage) {
    console.log(errorMessage)
    console.log("FAILED LOGIN")
  }
  return (
    <LoginView />
  );
}

const Root = () => {
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
        <App />
      {/*</PersistGate>*/}
    </Provider>
  );
}

export default Root
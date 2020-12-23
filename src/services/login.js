import AsyncStorage from '@react-native-async-storage/async-storage'

const LOGIN_KEY = 'LOGIN_KEY'
const baseURL = 'http://localhost:8000'

function login(username, password) {
  return fetch(baseURL + '/api/v1/auth/login/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((resp) => resp.json())
    .then(async (json) => {
      if (!('key' in json)) {
        throw new Error(json[Object.keys(json)[0]][0])
      }
      console.log('Trying to store auth token: ' + json.key)
      AsyncStorage.setItem(LOGIN_KEY, json.key)
    })
}

export default login

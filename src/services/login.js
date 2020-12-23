import AsyncStorage from '@react-native-async-storage/async-storage'

function login(username, password) {
  return fetch(process.env.BASE_URL + '/api/v1/auth/login/', {
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
      try {
        AsyncStorage.setItem(String(process.env.AUTH_TOKEN), json.key)
      } catch (err) {
        console.error('Async Storage failed')
        throw new Error('Cannot log in currently')
      }
    })
}

export default login

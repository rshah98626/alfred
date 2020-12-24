import AsyncStorage from '@react-native-async-storage/async-storage'

async function getFeed() {
  return getAuthToken()
    .then(async (authToken) => {
      return fetch(process.env.BASE_URL + '/api/v1/feed/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Token ' + authToken,
        },
      })
    })
    .then((resp) => resp.json())
}

const getAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(process.env.AUTH_TOKEN)
    if (!jsonValue)
      throw new Error('Retrievung auth token from async storage returned null')
    return JSON.parse(jsonValue)
  } catch (e) {
    console.error(e.message)
    throw new Error('Could not get auth token from async storage')
  }
}

export default getFeed

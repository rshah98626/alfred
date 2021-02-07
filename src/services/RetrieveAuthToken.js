import AsyncStorage from '@react-native-async-storage/async-storage'

const retrieveAuthToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(process.env.AUTH_TOKEN)
    if (!jsonValue)
      throw new Error('Retrievung auth token from async storage returned null')
    return jsonValue
  } catch (e) {
    console.error(e.message)
    throw new Error('Could not get auth token from async storage')
  }
}

export default retrieveAuthToken

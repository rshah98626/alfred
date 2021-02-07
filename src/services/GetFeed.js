import retrieveAuthToken from './RetrieveAuthToken'

async function getFeed() {
  return retrieveAuthToken().then(async (authToken) => {
    return fetch(process.env.BASE_URL + '/api/v1/feed/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + authToken,
      },
    }).then((resp) => resp.json())
  })
}

export default getFeed

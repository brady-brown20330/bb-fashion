import * as Contentstack from 'contentstack';

// Initialize the Contentstack Stack
const Stack = Contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  region: process.env.REACT_APP_REGION ? process.env.REACT_APP_REGION : "us",
});

export default {
  getEntry(ctUid) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result)
          },
          (error) => {
            reject(error)
          }
        )
    })
  },
}
import axios from 'axios';
import serviceConfig from '../constants/services';

const client = axios.create({
  baseURL: serviceConfig.apiEndPoint
});

const request = function(options) {
  if (options === undefined) {
    options = {};
  }
  const queryParams =  {
    api_key: serviceConfig.apiKey,
  }
  
  options.params = Object.assign({}, options.params, queryParams);

  const onSuccess = function(response) {
    return response.data;
  }

  const onError = function(error) {
    console.error('Request Failed:', error);

    if (error.response) {
      // server error
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // client error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options).then(onSuccess).catch(onError);
}

export default request;

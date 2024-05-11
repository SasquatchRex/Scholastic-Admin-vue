import axios from 'axios';

// Set base URL for your API
axios.defaults.baseURL = 'http://localhost:8000';

// Set default headers if needed (e.g., for authentication)
// axios.defaults.headers.common['Authorization'] = 'Bearer token';

// Add a request interceptor for handling requests
axios.interceptors.request.use(
  function(config) {
    // You can modify config before sending the request
    return config;
  },
  function(error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling responses
axios.interceptors.response.use(
  function(response) {
    // You can modify response data before resolving the promise
    return response;
  },
  function(error) {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default axios;

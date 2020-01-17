import axios from "axios";

const _baseUrl = "http://demo4760291.mockable.io/";

const appClient = axios.create({
  baseURL: _baseUrl,

  headers: {
    "X-NLocale": "EN",
    "X-NPlatformId": "WEB_APP"
  }
});

appClient.interceptors.request.use(function(config) {
  return config;
});

appClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/**
 * Request Wrapper with base url set to _baseUrl.
 */
const appRequest = function(options) {
  const onSuccess = function(response) {
    if (response && response.data) {
      return response.data;
    } else {
      return false;
    }
  };

  const onError = function(error) {
    let errorResult;

    console.log("error", error);
    return Promise.reject(errorResult);
  };

  return appClient(options)
    .then(onSuccess)
    .catch(onError);
};

export { appRequest };

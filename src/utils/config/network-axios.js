import axios from "axios";

const _baseUrl = "";

/**
 * Create an Axios Client with defaults
 */
export const GET = "GET";
export const POST = "POST";
export const DELETE = "DELETE";
export const PATCH = "PATCH";
export const PUT = "PUT";

const appClient = axios.create({
  baseURL: _baseUrl,

  headers: {
    "X-NLocale": "EN",
    "X-NPlatformId": "WEB_APP"
  }
});
// appClient.defaults.headers.common["Authorization"] = Keys.token;
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

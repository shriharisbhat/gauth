import axios from "axios";
import Utils from "utils/utils";

const _baseUrl = "http://demo4760291.mockable.io/";
var requestCount = 0;

const appClient = axios.create({
  baseURL: _baseUrl,
  headers: {
    "Accept-Language": "en-US",
    "X-Device-Info": "Desktop"
  }
});

function hideLoader() {
  requestCount--;
  if (!requestCount) {
    Utils.hideLoadingIndicator();
  }
}

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
  Utils.showLoadingIndicator();
  requestCount++;
  const onSuccess = function(response) {
    hideLoader();
    if (response && response.data) {
      return response.data;
    } else {
      return false;
    }
  };

  const onError = function(error) {
    let errorResult;
    hideLoader();
    console.log("error", error);
    return Promise.reject(errorResult);
  };

  return appClient(options)
    .then(onSuccess)
    .catch(onError);
};

export { appRequest };

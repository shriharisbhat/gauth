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
    let errorMessage = { title: "", message: {} };
    hideLoader();
    console.log("error", error);
    if (error.response) {
      errorResult = error.response;

      errorMessage.title = "Error";
      errorMessage.message = "Something went wrong";
    } else if (error.request) {
      errorResult = error.request;
      let online = window.navigator.onLine;
      if (online) {
        errorMessage.title = "Error";
        errorMessage.message = "Something went wrong";
      } else {
        errorMessage.title = "Error";
        errorMessage.message = "Something went wrong";
      }
    } else {
      errorResult = error.message;
      errorMessage.title = "Error";
      errorMessage.message = error.message;
    }

    if (errorMessage.title) {
      console.log("error ikn", errorMessage);
      // alert(errorMessage.message);
    }

    return Promise.reject(errorResult);
  };

  return appClient(options)
    .then(onSuccess)
    .catch(onError);
};

export { appRequest };

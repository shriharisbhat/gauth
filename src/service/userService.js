import * as axios from "../network/network";
const config = require("../config/apiConfig.json");

class UserService {
  // login
  static signIn(params) {
    return axios.appRequest({
      method: "post",
      url: config.user.login,
      data: params
    });
  }

  // register adn login
  static signUp(params) {
    return axios.appRequest({
      method: "post",
      url: config.user.login,
      data: params
    });
  }
}

export { UserService };

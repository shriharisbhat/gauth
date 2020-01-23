import * as axios from "../network/network";
const config = require("../config/apiConfig.json");

class UserService {
  static signIn(params) {
    return axios.appRequest({
      method: "post",
      url: config.user.login,
      data: params
    });
  }
}

export { UserService };

import * as axios from "../network/network";
const config = require("../config/apiConfig.json");

export class UserService {
  // login with Discovery(sonic api)
  static signIn(params) {
    return axios.appRequest({
      method: "post",
      url: "http://demo4760291.mockable.io/" + config.user.login,
      data: params
    });
  }

  // register and login
  static signUp(params) {
    return axios.appRequest({
      method: "post",
      url: "http://demo4760291.mockable.io/" + config.user.register,
      data: params
    });
  }
}

export default UserService;

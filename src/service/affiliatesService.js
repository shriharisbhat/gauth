import * as axios from "../network/network";
const config = require("../config/apiConfig.json");

export class AffiliateService {
  static getAffiliateList(params) {
    return axios.appRequest({
      method: "get",
      url: config.affiliates.affiliates,
      params: params
    });
  }
  static getAuthorize(params) {
    return axios.appRequest({
      method: "get",
      url: config.affiliates.authorize,
      params: params
    });
  }
}

export default AffiliateService;

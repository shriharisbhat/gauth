import * as axios from "../network/network";
const config = require("../config/apiConfig.json");

class AffiliateService {
  static getAffiliateList(params) {
    return axios.appRequest({
      method: "get",
      url: config.affiliates.affiliates,
      params: params
    });
  }
}

export default AffiliateService;

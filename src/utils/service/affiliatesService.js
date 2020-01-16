import * as axios from "../config/network-axios";

class AffiliateService {
  static getAffiliateList(params) {
    return axios.appRequest({
      method: "get",
      url: "http://demo4760291.mockable.io/partners",
      params: params
    });
  }
}

export default AffiliateService;

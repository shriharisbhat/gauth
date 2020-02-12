import React, { Component } from "react";

import ShadowBox from "../../UI/ShadowBox";
import AffiliateService from "./../../service/affiliatesService";
import * as config from "config/apiConfig.json";
import { Strings } from "config";
import "./styles.scss";
import ErrorHandler from "../../UI/ErrorHandler/ErrorHandler";

class Affiliates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affiliateList: [],
      error: null,
      location: null
    };
  }

  componentDidMount() {
    const data = {};
    data.brand_id = config.general.brandId;
    this.getAffiliateListData(data);
  }
  async getAffiliateListData(data) {
    await AffiliateService.getAffiliateList(data).then(
      response => {
        if (response)
          this.setState({
            affiliateList: response
          });
      },
      error => {
        this.setState({ error });
      }
    );
  }

  callAuthorize = async partnerId => {
    const data = {};
    data.partner_id = partnerId;
    data.brand_id = config.general.brandId;
    data.redirect_url = config.general.redirectUrl;
    await AffiliateService.getAuthorize(data).then(
      response => {
        if (response) {
          this.setState({
            location: response.location
          });
          // below location.href is not working for unit testing.
          //window.location.href = response.data.location;
          window.location.assign(response.location);
        }
      },
      error => {
        this.setState({ error });
      }
    );
  };

  render() {
    return (
      <div className="app">
        <div className="mainContainer ">
          <div className="headerContainer">
            <p className="headerText1">{Strings.affiliates.signInLine1}</p>
            <p className="headerText2 ">{Strings.affiliates.signInLine2}</p>
          </div>
        </div>
        <div className="logoList">
          {this.state.error && <ErrorHandler error={this.state.error} />}
          {this.state.affiliateList.map(item => (
            <div key={item.id} id="logo">
              <ShadowBox
                logo={item.logo_url}
                partnerId={item.id}
                onClick={this.callAuthorize}
                testID={"logo"}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Affiliates;

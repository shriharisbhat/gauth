import React, { Component } from "react";

import ShadowBox from "../../UI/ShadowBox";
import { AffiliateService } from "service";
import * as config from "config/apiConfig.json";
import { Strings } from "config";
import "./styles.scss";
import ErrorHandler from "../../UI/ErrorHandler/ErrorHandler";

class Affiliates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affiliateList: [],
      error: null
    };
  }

  componentDidMount() {
    this.getAffiliateListData();
  }
  getAffiliateListData = () => {
    AffiliateService.getAffiliateList().then(
      response => {
        console.log("response from affiliates", response);
        if (response.data)
          this.setState({
            affiliateList: response.data
          });
      },
      error => {
        console.log("error from affiliates", error);
        this.setState({ error });
      }
    );
  };

  callAuthorize = partnerId => {
    const data = {};
    data.partnerId = partnerId;
    AffiliateService.getAuthorize(data).then(
      response => {
        if (response.data && response.data.location)
          window.location.href = response.data.location;
      },
      error => {
        console.log("error from Authorize", error);
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
            <div key={item.partner_id}>
              <ShadowBox
                logo={item.logo_url}
                partnerId={item.partner_id}
                link={config.affiliates.authorize}
                onClick={this.callAuthorize}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Affiliates;

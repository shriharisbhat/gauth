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
    this.getAffiliateListData();
  }
  async getAffiliateListData() {
    await AffiliateService.getAffiliateList().then(
      response => {
        if (response && response.data)
          this.setState({
            affiliateList: response.data
          });
      },
      error => {
        this.setState({ error });
      }
    );
  }

  callAuthorize = async partnerId => {
    const data = {};
    data.partnerId = partnerId;
    await AffiliateService.getAuthorize(data).then(
      response => {
        if (response && response.data) {
          this.setState({
            location: response.data.location
          });
          window.location.href = response.data.location;
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
            <div key={item.partner_id} id="logo">
              <ShadowBox
                logo={item.logo_url}
                partnerId={item.partner_id}
                link={config.affiliates.authorize}
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

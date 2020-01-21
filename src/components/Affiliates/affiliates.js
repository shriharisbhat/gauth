import React, { Component } from "react";

import ShadowBox from "../../UI/ShadowBox";
import { AffiliateService } from "service";
import * as config from "config/apiConfig.json";
import { Strings } from "config";
import "./styles.scss";

class Affiliates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      affiliateList: []
    };
  }

  componentDidMount() {
    this.getAffiliateListData();
  }
  getAffiliateListData = () => {
    AffiliateService.getAffiliateList().then(
      response => {
        console.log("response from affiliates", response);
        this.setState({
          affiliateList: response.data
        });
      },
      error => {
        console.log("error from affiliates", error);
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
          {this.state.affiliateList.map(item => (
            <div key={item.partner_id}>
              <ShadowBox
                logo={item.logo_url}
                client={item.client}
                link={config.affiliates.authorize}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Affiliates;

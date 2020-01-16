import React, { Component } from "react";

import ShadowBox from "../../UI/ShadowBox";
import AffiliateService from "../../utils/service/affiliatesService";
import "./styles.scss";

class Affiliates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logos: []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="mainContainer ">
          <div className="headerContainer">
            <p className="headerText1">SIGN IN TO UNLOCK ALL SHOWS!</p>
            <p className="headerText2 ">
              This service is FREE with your TV subscription
            </p>
          </div>
        </div>
        <div className="logoList">
          {this.state.logos.map(item => (
            <div key={item.partner_id}>
              <ShadowBox logo={item.logo_url} client={item.client} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    AffiliateService.getAffiliateList().then(
      response => {
        console.log("response from affiliates", response);
        this.setState({
          logos: response.data
        });
      },
      error => {
        console.log("error from affiliates", error);
      }
    );
  }
}

export default Affiliates;

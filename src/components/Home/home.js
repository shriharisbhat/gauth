import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { Strings } from "config";
import "./styles.css";
import Images from "assets/images";

export class home extends Component {
  render() {
    return (
      <div className="homeHeaderContainer">
        <div className="headerText">
          <Link href="/affiliates" style={{ color: "white" }}>
            {Strings.general.signIn}
          </Link>
        </div>

        <div className="headerImage">
          <img src={Images.discoveryLogo} alt={""} width="250px" />
        </div>
      </div>
    );
  }
}

export default home;

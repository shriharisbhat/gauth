import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import { Strings } from "config";
import "./styles.css";

export class home extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerText">
          <Link href="/affiliates" style={{ color: "white" }}>
            {Strings.general.signIn}
          </Link>
        </div>
      </div>
    );
  }
}

export default home;

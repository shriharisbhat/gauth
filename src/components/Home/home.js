import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import "./styles.css";
export class home extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerText">
          <Link href="/login" color="secondary">
            {"Sign in"}
          </Link>
        </div>
      </div>
    );
  }
}

export default home;

import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div id="loader" className="loading">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

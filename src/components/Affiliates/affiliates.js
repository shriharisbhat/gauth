import React, { Component } from "react";
import ShadowBox from "../../UI/ShadowBox";
import "./styles.scss";

class Affiliates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logos: [
        {
          logo: 1,
          id: 1,
          client: "disovery1",
          url: require("../../assets/discovery.jpg")
        },
        {
          userId: 2,
          id: 2,
          client: "disovery2",
          url: require("../../assets/discovery.jpg")
        },
        {
          userId: 3,
          id: 3,
          client: "disovery3",
          url: require("../../assets/discovery.jpg")
        },
        {
          userId: 4,
          id: 4,
          client: "disovery4",
          url: require("../../assets/discovery.jpg")
        },
        {
          userId: 5,
          id: 5,
          client: "disovery3",
          url: require("../../assets/discovery.jpg")
        },
        {
          userId: 6,
          id: 6,
          client: "disovery4",
          url: require("../../assets/discovery.jpg")
        }
      ]
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
            <div key={item.id}>
              <ShadowBox logo={item.url} client={item.client} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Affiliates;

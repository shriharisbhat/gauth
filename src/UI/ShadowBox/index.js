import React from "react";
import "./styles.scss";

const ShadowBox = props => {
  console.log(props);
  return (
    <div className="card card-4">
      <div
        style={{
          alignSelf: "center",
          padding: "5%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={props.logo}
          alt={props.client}
          height="100%"
          width="100%"
          className="logoImage"
        />
      </div>
    </div>
  );
};

export default ShadowBox;

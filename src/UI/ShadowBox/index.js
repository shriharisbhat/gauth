import React from "react";
import "./styles.scss";

const ShadowBox = props => {
  console.log(props);
  return (
    <div className="card card-4">
      <div
        style={{
          paddingLeft: "10%",
          alignSelf: "center"
        }}
      >
        <img src={props.logo} alt={props.client} height="90%" width="90%" />
      </div>
    </div>
  );
};

export default ShadowBox;

import React from "react";
import "./styles.scss";

const ShadowBox = props => {
  console.log(props);
  return (
    <div className="card card-4">
      <div style={{ padding: "20px" }}>
        <img src={props.logo} alt={props.client} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default ShadowBox;

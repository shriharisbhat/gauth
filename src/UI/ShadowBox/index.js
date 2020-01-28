import React from "react";
import Link from "@material-ui/core/Link";
import "./styles.scss";

const ShadowBox = props => {
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
          alt={props.partnerId}
          height="100%"
          width="100%"
          className="logoImage"
          onClick={() => props.onClick(props.partnerId)}
        />
      </div>
    </div>
  );
};

export default ShadowBox;

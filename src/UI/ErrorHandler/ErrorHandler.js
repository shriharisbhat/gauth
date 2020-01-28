import React from "react";

import SimpleModal from "../../UI/Modal/Modal";

const ErrorHandler = props => {
  console.log("props in errro", props);
  return <SimpleModal error={props.error} />;
};

export default ErrorHandler;

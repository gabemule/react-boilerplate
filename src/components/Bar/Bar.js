import React from "react";

import "./bar.scss";
import PropTypes from "prop-types";

const Bar = ({children}) => {
  return (
    <div className={"bar"}>
      {children}
    </div>
  );
};

Bar.propTypes = {
  children: PropTypes.any,
};

export default Bar;

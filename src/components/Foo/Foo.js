import React from "react";

import "./foo.scss";
import PropTypes from "prop-types";

const Foo = ({children}) => {
  return (
    <div className={"foo"}>
      {children}
    </div>
  );
};

Foo.propTypes = {
  children: PropTypes.any,
};

export default Foo;

import React from "react";
import PropTypes from "prop-types";

// config
import CaptionConfig from "./Caption.config";

export interface DsCaptionProps {
  children?: string,
  className?: string,
}

const DsCaption = ({ children, className }: DsCaptionProps) => {

  return (
    <p
      data-testid="text-caption"
      className={[CaptionConfig.class, className && className].filter(classes => classes).join(" ")}
    >
      {children}
    </p>
  );
};

DsCaption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};


export default DsCaption;

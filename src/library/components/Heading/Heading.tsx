import React from "react";
import PropTypes from "prop-types";
// import withCustomProps from '@/library/decorators/withCustomProps'

// config
import HeadingConfig from "./Heading.config";

export interface DsHeadingProps {
  children?: string,
  className?: string,
  type: string,
}

const DsHeading = ({
  children,
  type,
  className
}: DsHeadingProps) => {

  const headingSize: { [key: string]: string } = {
    display: "h1",
    "x-large": "h2",
    large: "h3",
    medium: "h4",
    small: "h5",
    "x-small": "h6",
  }
  const headingTypeClass = HeadingConfig.props.type.options.find((value: string) => value === type) && `${HeadingConfig.class}--${type}`;

  let CustomTag: string = headingSize[type];
  const TypedTag = CustomTag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <TypedTag
      data-testid="text-heading"
      className={[HeadingConfig.class, headingTypeClass, className && className].filter(classes => classes).join(" ")}>
      {children}
    </TypedTag>
  );
};

DsHeading.propTypes = {
  type: PropTypes.oneOf(HeadingConfig.props.type.options),
  className: PropTypes.string,
};

DsHeading.defaultProps = {
  type: HeadingConfig.props.type.default
};

export default DsHeading;

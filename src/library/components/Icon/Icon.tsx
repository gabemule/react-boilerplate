import React from "react";
// import withCustomProps from '@/library/decorators/withCustomProps'
import PropTypes from 'prop-types';

// config
import IconConfig from "./Icon.config";
// import { DsIconInterface } from "./../Icon/Icon.config";

/**
 *
 * @param {String} image
 * @param {String} color
 *
 * @return DsIcon
 */

export interface DsIconProps {
  color: string,
  image: string,
  className?: string
}

const DsIcon = ({ image, color, className }: DsIconProps) => {
  const iconClass = IconConfig.props.image.options.find((value: string) => value === image) && image;
  const iconColor = color && IconConfig.props.color.options!.find((value: string) => value === color) && `${IconConfig.class}__color--${color}`;

  return (
    <div
      data-testid="text-icon"
      className={
        [
          IconConfig.class,
          `${IconConfig.class}--${iconClass}`,
          iconColor,
          className && className
        ].filter(classes => classes).join(" ")}
    />
  );
};

DsIcon.propTypes = {
  color: PropTypes.oneOf(IconConfig.props.color.options),
  image: PropTypes.oneOf(IconConfig.props.image.options),
}

DsIcon.defaultProps = {
  color: IconConfig.props.color.default,
  image: IconConfig.props.image.default,
}

export default DsIcon;

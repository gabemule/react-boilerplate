import React, { HTMLAttributes } from "react";
// import withCustomProps from '@/library/decorators/withCustomProps'
import PropTypes from 'prop-types';

// config
import ButtonConfig from "./Button.config";

// components
import { DsIcon } from "@/library/components/Icon";
// import Button from "@/app/views/components/Button";

export interface DsButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string,
  className?: string,
  size?: string,
  disabled?: boolean,
  icon?: string,
  type?: string,
}

const DsButton = ({
  children,
  className,
  onClick,
  size,
  disabled,
  icon,
  type,
}: DsButtonProps) => {
  const buttonSize = size && ButtonConfig.props.size.options.find((value: string) => value === size) ? `${ButtonConfig.class}--${size}` : `${ButtonConfig.class}__huge`;
  const buttonDisabled = disabled && `${ButtonConfig.class}--disabled`;
  const buttonType = type && `${ButtonConfig.class}--${type}`

  return (
    <button
      className={[ButtonConfig.class, buttonSize, buttonType, buttonDisabled, className && className].filter(classes => classes).join(" ")}
      onClick={!disabled ? onClick : () => { }}
      data-testid="button"
    >
      <span className="ds-button__text">
        {children}
        {icon &&
          <span className="ds-button__icon">
            <DsIcon image={icon} color={type === "danger" ? "neutral-00" : ""} />
          </span>
        }
      </span>
    </button>
  );
};

DsButton.propTypes = {
  type: PropTypes.oneOf(ButtonConfig.props.type.options),
  size: PropTypes.oneOf(ButtonConfig.props.size.options),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(ButtonConfig.props.icon.options)
};

DsButton.defaultProps = {
  type: ButtonConfig.props.type.default,
  size: ButtonConfig.props.size.default,
  disabled: ButtonConfig.props.disabled.default,
  icon: ButtonConfig.props.icon.default
};

export default DsButton;

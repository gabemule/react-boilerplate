import React from "react";
import withCustomProps from '@/library/decorators/withCustomProps'

// config
import InputConfig from "./Input.config";

// components
import { DsIcon } from "@/library/components/Icon";
import { DsTooltip } from "@/library/components/Tooltip";

export interface DsInputProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string,
  type?: string,
  animated?: boolean,
  size?: string,
  label?: string,
  placeholder?: string,
  value?: string,
  tooltip?: string,
  icon?: string,
  status?: string,
  feedback?: string,
  disabled?: boolean
}

const DsInput = ({
  name,
  type,
  animated,
  size,
  label,
  placeholder,
  value,
  tooltip,
  icon,
  status,
  feedback,
  disabled,
  className
}: DsInputProps) => {

  const takeClasses = (): string => {
    let classes = [`${InputConfig.class}`];
    size && classes.push(`${InputConfig.class}--${size}`);
    animated && classes.push(`${InputConfig.class}--animated`);
    tooltip && classes.push(`${InputConfig.class}--with-icon`);
    status && classes.push(`${InputConfig.class}--${status}`);
    className && classes.push(className);
    return classes.join(' ');
  }

  const takePlaceholder = (): string => {
    return !animated && placeholder ? placeholder : ""
  }

  const iconStatus = (): string => {
    return status && status === "error" ? "info" : "circle-check";
  }

  return (
    <div className={takeClasses()}>
      {feedback &&
        <div className="ds-input__feedback">
          <DsIcon image={iconStatus()} />
          {feedback}
        </div>
      }
      <input
        id={name}
        name={name}
        type={type}
        placeholder={takePlaceholder()}
        disabled={disabled}
        className="ds-input__input"
        defaultValue={value}
      />
      <label htmlFor={name} className="ds-input__label">{label}</label>
      {tooltip &&
        <DsTooltip
          className="ds-input__tooltip"
          text={tooltip}
          placement="end"
        >
          <DsIcon
            image={icon}
            className="ds-input__icon"
          />
        </DsTooltip>
      }
    </div>
  );
};

export default withCustomProps(DsInput, InputConfig.props);

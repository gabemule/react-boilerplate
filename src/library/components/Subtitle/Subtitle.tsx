import React from "react";
import withCustomProps from '@/library/decorators/withCustomProps'

// config
import SubtitleConfig from "./Subtitle.config";

export interface DsSubtitleProps {
  children?: string,
  className?: string,
  type?: string,
}

const DsSubtitle = ({ children, type, className }: DsSubtitleProps) => {
  const subtitleType = SubtitleConfig.props.type.options.find((value: string) => value === type) && `${SubtitleConfig.class}--${type}`;
  return (
    <p
      data-testid="text-subtitle"
      className={[SubtitleConfig.class, subtitleType, className && className].filter(classes => classes).join(" ")}
    >
      {children}
    </p>
  );
};

export default withCustomProps(DsSubtitle, SubtitleConfig.props);

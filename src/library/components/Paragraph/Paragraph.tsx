import React from "react";
import withCustomProps from '@/library/decorators/withCustomProps'

// config
import ParagraphConfig from "./Paragraph.config";

export interface DsParagraphProps {
  children?: string,
  className?: string,
  type?: string,
}

const DsParagraph = ({
  children,
  className,
  type,
}: DsParagraphProps) => {
  const paragraphType = `${ParagraphConfig.class}--${type}`;

  return (
    <p
      data-testid="text-text"
      className={[ParagraphConfig.class, paragraphType, className && className].filter(classes => classes).join(" ")}>
      {children}
    </p>
  );
};

export default withCustomProps(DsParagraph, ParagraphConfig.props);

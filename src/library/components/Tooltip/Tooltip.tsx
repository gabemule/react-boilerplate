import React, { useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types";
import withCustomProps from '@/library/decorators/withCustomProps'

import TooltipConfig from "./Tooltip.config";

export interface DsTooltipProps {
  children?: any,
  position?: string,
  placement?: string,
  text?: string,
  className?: string
}

const DsTooltip = ({ children, position, placement, text, className }: DsTooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [showTooltip, setShowTooltip] = useState(false)
  const [clicked, setClicked] = useState(false)

  const tooltipPosition = position && TooltipConfig.props.position.options.find((value: string) => value === position) && `${TooltipConfig.class}--${position}`;
  const tooltipPlacement = placement && TooltipConfig.props.placement.options.find((value: string) => value === placement) && `${TooltipConfig.class}--${placement}`;

  const [childrenHeight, setChildrenHeight] = useState(0)
  const [childrenWidth, setChildrenWidth] = useState(0)
  const [tooltipHeight, setTooltipHeight] = useState(0)
  const [tooltipWidth, setTooltipWidth] = useState(0)

  let tooltipOffsetPosition;

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipHeight(tooltipRef?.current?.offsetHeight);
      setTooltipWidth(tooltipRef?.current?.offsetWidth);
    }
    if (childrenRef.current) {
      setChildrenHeight(childrenRef?.current?.offsetHeight);
      setChildrenWidth(childrenRef?.current?.offsetWidth);
    }
  }, [childrenRef, showTooltip])

  switch (position) {
    case 'top':
      if (placement === 'initial') {
        tooltipOffsetPosition = { bottom: childrenHeight + 9, left: childrenWidth < 30 ? -childrenWidth / 1.5 : -childrenWidth * 0.01 }
      } else if (placement === 'end') {
        tooltipOffsetPosition = { bottom: childrenHeight + 9, right: childrenWidth < 30 ? -childrenWidth / 1.5 : -childrenWidth * 0.01 }
      } else {
        tooltipOffsetPosition = { bottom: childrenHeight + 9, left: -tooltipWidth / 2 + childrenWidth / 2 }
      }
      break;
    case 'bottom':
      if (placement === 'initial') {
        tooltipOffsetPosition = { top: childrenHeight + 9, left: childrenWidth < 30 ? -childrenWidth / 1.5 : -childrenWidth * 0.01 }
      } else if (placement === 'end') {
        tooltipOffsetPosition = { top: childrenHeight + 9, right: childrenWidth < 30 ? -childrenWidth / 1.5 : -childrenWidth * 0.01 }
      } else {
        tooltipOffsetPosition = { top: childrenHeight + 9, left: -tooltipWidth / 2 + childrenWidth / 2 }
      }
      break;
    case 'left':
      if (placement === 'initial') {
        tooltipOffsetPosition = { right: childrenWidth + 9, top: childrenHeight < 30 ? -childrenHeight / 1.5 : -childrenHeight * 0.01 }
      } else if (placement === 'end') {
        tooltipOffsetPosition = { right: childrenWidth + 9, bottom: childrenHeight < 30 ? -childrenHeight / 1.5 : -childrenHeight * 0.01 }
      } else {
        tooltipOffsetPosition = { right: childrenWidth + 9, top: -tooltipHeight / 2 + childrenHeight / 2 }
      }
      break;
    case 'right':
      if (placement === 'initial') {
        tooltipOffsetPosition = { left: childrenWidth + 9, top: childrenHeight < 30 ? -childrenHeight / 1.5 : -childrenHeight * 0.01 }
      } else if (placement === 'end') {
        tooltipOffsetPosition = { left: childrenWidth + 9, bottom: childrenHeight < 30 ? -childrenHeight / 1.5 : -childrenHeight * 0.01 }
      } else {
        tooltipOffsetPosition = { left: childrenWidth + 9, top: -tooltipHeight / 2 + childrenHeight / 2 }
      }
      break;
  }


  const onMouseEnter = (e: React.MouseEvent) => {
    setShowTooltip(true)
  }

  const onMouseLeave = (e: React.MouseEvent) => {
    if (!clicked) setShowTooltip(false)
  }

  const onClick = (e: React.MouseEvent) => {
    setClicked(!clicked)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={[TooltipConfig.class, className].join(' ')}
      ref={childrenRef}
    >
      {children}
      {showTooltip &&
        <div className={[tooltipPosition, tooltipPlacement].filter(classes => classes).join(" ")}>
          <div ref={tooltipRef} className={`${TooltipConfig.class}__wrapper`}
            style={tooltipOffsetPosition}>
            {text}
          </div>
        </div>
      }
    </div>
  )
}

DsTooltip.propTypes = {
  position: PropTypes.string,
  placement: PropTypes.string,
  text: PropTypes.string
}

DsTooltip.defaultProps = {
  position: TooltipConfig.props.position.default,
  placement: TooltipConfig.props.placement.default,
  text: TooltipConfig.props.text.default
}

export default DsTooltip;

import React, { useState } from 'react'
// import withCustomProps from '@/library/decorators/withCustomProps'
import PropTypes from "prop-types";

import { DsAccordionItemProps } from '@/library/types/types'
import { DsIcon } from '@/library/components/Icon';
import { DsParagraph } from '@/library/components/Paragraph';

// config
import AccordionItemConfig from "./AccordionItem.config";

const DsAccordionItem = ({ index, title, disabled, content, className }: DsAccordionItemProps) => {
  const [clicked, setClicked] = useState(index === 0);

  const accordionItemDisabled = disabled && `${AccordionItemConfig.class}--disabled`;
  const accordionItemIsOpen = clicked && `${AccordionItemConfig.class}--active`;

  const handleToggle = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <li
      className={[AccordionItemConfig.class, accordionItemDisabled, accordionItemIsOpen, className && className].filter(classes => classes).join(" ")}
      data-testid="accordionItem"
    >
      <button className={`${AccordionItemConfig.class}__button`} disabled={disabled} onClick={handleToggle}>
        <DsParagraph type="small">
          {title}
        </DsParagraph>
        <DsIcon image={disabled ? 'block' : 'keyboard-arrow-down'} color={disabled ? 'neutral-40' : 'neutral-90'} />
      </button>
      {clicked &&
        <div className="ds-accordion-item__content">
          {content}
        </div>}
    </li>
  )
}

DsAccordionItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

DsAccordionItem.defaultProps = {
  title: "",
  content: "",
  disabled: false
}

export default DsAccordionItem;

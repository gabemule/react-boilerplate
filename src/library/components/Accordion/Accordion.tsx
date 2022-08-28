import React, { useState } from 'react'
// import withCustomProps from '@/library/decorators/withCustomProps'
import PropTypes from "prop-types";

import DsAccordionItem from './AccordionItem'
import { DsAccordionItemProps } from '@/library/types/types'

// config
import AccordionConfig from "./Accordion.config";

const DsAccordion = ({ items }: { items: DsAccordionItemProps[] }) => {
  return (
    <ul className={AccordionConfig.class}>
      {items.map((item, index) => {
        return <DsAccordionItem key={index} index={index} title={item.title} disabled={item.disabled} content={item.content} />
      }
      )}
    </ul>
  )
}

DsAccordion.propTypes = {
  items: PropTypes.array
};

DsAccordion.defaultProps = {
  items: []
}

export default DsAccordion;

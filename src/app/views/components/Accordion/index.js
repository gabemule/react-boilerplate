import React from 'react'

import { DsAccordion } from '@gabemule/design-system'

const Accordion = () => {
  const defaultItems = [
    {
      title: 'Accordion 1',
      content: 'lorem ipsum dolor sit amet',
      disabled: false
    },
    {
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, saepe tempore, dolorum nostrum earum ex porro sapiente illum asperiores aliquid repellendus exercitationem, a voluptates. Eveniet aliquam, nisi magni officiis delectus nam voluptates. Ratione quos vel, est culpa odio, officiis eius tempora itaque quasi inventore obcaecati quidem et accusamus ea cupiditate iusto sit. Impedit voluptates error aliquam perspiciatis ipsa totam corporis consectetur nihil odio assumenda voluptatem quidem aspernatur itaque eaque repudiandae consequuntur nisi inventore vero ab quasi, hic repellendus est reprehenderit? Autem nesciunt veniam nihil tempora magni error facere, aut repellat! Excepturi, non. Magnam voluptatem harum eum sit sint. Perferendis, vel!',
      disabled: false
    },
    {
      title: 'Accordion 3',
      content: 'lorem ipsum dolor sit amet',
      disabled: false
    },
    {
      title: 'Accordion 4',
      content: 'lorem ipsum dolor sit amet',
      disabled: true
    },
    {
      title: 'Accordion 5',
      content: 'lorem ipsum dolor sit amet',
      disabled: false
    }
  ]

  return (
    <div className={'accordion'}>
      <h1> Accordion </h1>
      <br />
      <DsAccordion items={defaultItems} />
    </div>
  )
}

export default Accordion

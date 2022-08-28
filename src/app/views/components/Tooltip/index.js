import React from 'react'

import { DsParagraph, DsTooltip, DsIcon } from '@gabemule/design-system'

const Tooltip = () => {
  return (
    <div className={'tooltip'}>
      <h1> Tooltip </h1>
      <br />
      <DsParagraph>
        This is a Tooltip component.
        <br />
        Are you seeing him? Try hovering{' '}
        <DsTooltip text="Hello, I`m a tooltip!">
          <u>
            <b>here</b>
          </u>
        </DsTooltip>{' '}
        and see.
        <br />
        Click to lock Tooltip as shown.
      </DsParagraph>
      <DsParagraph>
        Oh, and it also supports icon{' '}
        <DsTooltip text="Hello, I`m a tooltip!">
          <DsIcon image="help" />
        </DsTooltip>
      </DsParagraph>
    </div>
  )
}

export default Tooltip

import React from 'react'

import { DsButton, DsParagraph, DsHeading } from '@gabemule/design-system'

const Button = () => {
  return (
    <div className={'Button'}>
      <DsHeading type="display">Buttons - Dynamic Theme Change</DsHeading>

      <br />
      <br />

      <DsParagraph type="small">Small</DsParagraph>

      <br />

      <DsButton size="small"> Primary </DsButton>
      <DsButton size="small" type="secondary">
        {' '}
        Secondary{' '}
      </DsButton>
      <DsButton size="small" type="warning">
        {' '}
        Warning{' '}
      </DsButton>
      <DsButton size="small" type="danger">
        {' '}
        Danger{' '}
      </DsButton>
      <DsButton disabled size="small">
        {' '}
        Disabled{' '}
      </DsButton>

      <br />
      <br />

      <DsParagraph type="small">Medium</DsParagraph>

      <br />

      <DsButton> Primary </DsButton>
      <DsButton type="secondary"> Secondary </DsButton>
      <DsButton type="warning"> Warning </DsButton>
      <DsButton type="danger"> Danger </DsButton>
      <DsButton disabled> Disabled </DsButton>

      <br />
      <br />

      <DsParagraph type="small">Large</DsParagraph>

      <br />

      <DsButton size="large"> Primary </DsButton>
      <DsButton size="large" type="secondary">
        {' '}
        Secondary{' '}
      </DsButton>
      <DsButton size="large" type="warning">
        {' '}
        Warning{' '}
      </DsButton>
      <DsButton size="large" type="danger">
        {' '}
        Danger{' '}
      </DsButton>
      <DsButton disabled size="large">
        {' '}
        Disabled{' '}
      </DsButton>
    </div>
  )
}

export default Button

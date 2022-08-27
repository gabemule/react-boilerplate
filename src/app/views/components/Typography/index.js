import React from 'react'

import {
  DsHeading,
  DsSubtitle,
  DsParagraph,
  DsCaption
} from '@gabemule/design-system'

const Heading = () => {
  return (
    <div className={'Heading'}>
      <h1>Texts - Stretch browser to check mobile / desktop sizes</h1>
      <br />

      <DsHeading type="display"> Heading Display </DsHeading>
      <br />

      <DsHeading type="x-large"> Heading X-Large </DsHeading>
      <br />

      <DsHeading type="large"> Heading Large </DsHeading>
      <br />

      <DsHeading type="medium"> Heading Medium </DsHeading>
      <br />

      <DsHeading type="small"> Heading Small </DsHeading>
      <br />

      <DsHeading type="x-small"> Heading X-Small </DsHeading>
      <br />

      <br />
      <br />

      <DsSubtitle type="large"> Subtitle Large </DsSubtitle>
      <br />

      <DsSubtitle type="small"> Subtitle Small </DsSubtitle>
      <br />

      <br />
      <br />

      <DsParagraph type="large"> Paragraph Large </DsParagraph>
      <br />

      <DsParagraph type="small"> Paragraph Small </DsParagraph>
      <br />

      <br />
      <br />

      <DsCaption> Caption </DsCaption>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Heading

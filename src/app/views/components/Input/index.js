import React from 'react'

import { DsInput, DsHeading } from '@gabemule/design-system'

const Input = () => {
  return (
    <div className={'Input'}>
      <div className="inputs-without-label">
        <DsHeading type="display"> Inputs without label </DsHeading>
        <br />
        <DsInput
          feedback="Eita, mensagem de erro aqui."
          label="Nome"
          name="inputName"
          size="small"
          status="error"
          tooltip="Tooltip aqui"
        ></DsInput>
        <br />
        <DsInput
          feedback="Validado com sucesso!"
          label="E-mail"
          name="inputEmail"
          placeholder="seuemail@seusite.com"
          status="success"
          tooltip="Lorem ipsum dolor sit amet consectetur adisciping elit nulla."
          type="email"
        ></DsInput>
        <br />
        <DsInput
          label="Senha"
          name="inputPassword"
          size="large"
          tooltip="Tooltip aqui"
          type="password"
        ></DsInput>
        <br />
        <DsInput
          disabled={true}
          icon="help"
          label="Disabled"
          name="inputDisabled"
          size="small"
          tooltip="Tooltip aqui"
        ></DsInput>
      </div>
      <br />
      <hr />
      <br />
      <div className="input-with-label">
        <DsHeading type="display"> Inputs with label </DsHeading>
        <br />
        <DsInput
          animated={false}
          label="Nome"
          name="inputName"
          size="small"
          tooltip="Tooltip aqui"
        ></DsInput>
        <br />
        <DsInput
          animated={false}
          label="E-mail"
          name="inputEmail"
          placeholder="seuemail@seusite.com"
          tooltip="Tooltip aqui"
          type="email"
        ></DsInput>
        <br />
        <DsInput
          animated={false}
          label="Senha"
          name="inputPassword"
          size="large"
          tooltip="help"
          type="password"
        ></DsInput>
      </div>
    </div>
  )
}

export default Input

import React, { useState } from 'react'

// components
import {
  DsButton,
  DsCaption,
  DsHeading,
  DsIcon,
  DsInput,
  ThemeProvider,
  Tokens
} from '@gabemule/design-system'
import '@gabemule/design-system/themes/core-theme.css'

const Core = () => {
  console.log('Tokens ', Tokens)

  const [themeState, setThemeState] = useState('light')

  const changeTheme = () => {
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }

  return (
    <ThemeProvider library={'core'} theme={themeState}>
      <DsHeading type="display"> Core Library Sandbox </DsHeading>

      <br />
      <br />
      <hr />
      <br />

      <DsHeading type="medium"> Buttons </DsHeading>

      <DsButton onClick={() => changeTheme()} size={'large'}>
        {' '}
        Core Button{' '}
      </DsButton>

      <br />
      <br />
      <hr />
      <br />

      <DsHeading type="medium"> Icons </DsHeading>

      <DsIcon image={'arrow-back'} />

      <br />
      <br />
      <hr />
      <br />

      <DsCaption className="teste"> Core Design System Caption </DsCaption>

      <br />
      <br />
      <hr />
      <br />

      <DsHeading type="medium"> Inputs </DsHeading>

      <DsHeading type="small"> Inputs without label </DsHeading>

      <DsInput
        feedback="Eita, mensagem de erro aqui."
        label="Nome"
        name="inputName"
        size="small"
        status="error"
        tooltip="Tooltip aqui"
      ></DsInput>
      <DsInput
        feedback="Validado com sucesso!"
        label="E-mail"
        name="inputEmail"
        placeholder="seuemail@seusite.com"
        status="success"
        tooltip="Lorem ipsum dolor sit amet consectetur adisciping elit nulla."
        type="email"
      ></DsInput>
      <DsInput
        label="Senha"
        name="inputPassword"
        size="large"
        tooltip="Tooltip aqui"
        type="password"
      ></DsInput>
      <DsInput
        disabled={true}
        icon="help"
        label="Disabled"
        name="inputDisabled"
        size="small"
        tooltip="Tooltip aqui"
      ></DsInput>

      <br />

      <DsHeading type="small"> Inputs with label </DsHeading>

      <DsInput
        animated={false}
        label="Nome"
        name="inputName2"
        size="small"
        tooltip="Tooltip aqui"
      ></DsInput>
      <DsInput
        animated={false}
        label="E-mail"
        name="inputEmail2"
        placeholder="seuemail@seusite.com"
        tooltip="Tooltip aqui"
        type="email"
      ></DsInput>
      <DsInput
        animated={false}
        label="Senha"
        name="inputPassword2"
        size="large"
        tooltip="help"
        type="password"
      ></DsInput>

      <br />
      <br />
      <hr />
      <br />
    </ThemeProvider>
  )
}

export default Core

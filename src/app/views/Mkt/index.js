import React, { useState } from 'react'

// components
import { DsButton, DsCaption, ThemeProvider } from '@gabemule/design-system'
import '@gabemule/design-system/themes/mkt-theme.css'

const Mkt = () => {
  const [themeState, setThemeState] = useState('light')

  const changeTheme = () => {
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }

  return (
    <ThemeProvider library={'mkt'} theme={themeState}>
      <DsButton onClick={() => changeTheme()} size={'large'}>
        {' '}
        Marketing Button{' '}
      </DsButton>

      <DsCaption> Marketing Design System Caption </DsCaption>
    </ThemeProvider>
  )
}

export default Mkt

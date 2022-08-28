import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { ThemeProvider } from '@gabemule/design-system'
import '@gabemule/design-system/themes/core-theme.css'
import '@gabemule/design-system/themes/digital-theme.css'
import '@gabemule/design-system/themes/bees-theme.css'

// main views
import Home from '@/app/views/Home'
import Form from '@/app/views/Form'

// components views
import Accordion from '@/app/views/components/Accordion'
import Button from '@/app/views/components/Button'
import Grid from '@/app/views/components/Grid'
import Typography from '@/app/views/components/Typography'
import Icon from '@/app/views/components/Icon'
import Input from '@/app/views/components/Input'
import Tooltip from '@/app/views/components/Tooltip'

const Router = () => {
  const [themeState, setThemeState] = useState('light')
  const [libState, setLibState] = useState('core')

  const changeTheme = () => {
    themeState === 'light' ? setThemeState('dark') : setThemeState('light')
  }

  const changeLibrary = (e) => setLibState(e.target.value)

  return (
    <BrowserRouter>
      <ThemeProvider library={libState} theme={themeState}>
        <div className="app-navbar">
          <div className="app-menu">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/Form"> Form </Link>
            </span>
            <span> | </span>
            <span>
              <Link to="/accordion"> Accordion </Link>
            </span>
            <span>
              <Link to="/button"> Button </Link>
            </span>
            <span>
              <Link to="/grid"> Grid </Link>
            </span>
            <span>
              <Link to="/typography"> Typography </Link>
            </span>
            <span>
              <Link to="/icon"> Icon </Link>
            </span>
            <span>
              <Link to="/input"> Input </Link>
            </span>
            <span>
              <Link to="/tooltip"> Tooltip </Link>
            </span>
          </div>
          <div className="app-actions">
            <button onClick={changeTheme}> Theme: {themeState} </button>
            <select onChange={changeLibrary}>
              <option value="core">Core</option>
              <option value="digital">Digital</option>
              <option value="bees">Bees-Bank</option>
            </select>
          </div>
        </div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Form />} path="/Form" />
          <Route element={<Accordion />} path="/accordion" />
          <Route element={<Button />} path="/button" />
          <Route element={<Grid />} path="/grid" />
          <Route element={<Typography />} path="/typography" />
          <Route element={<Icon />} path="/icon" />
          <Route element={<Input />} path="/input" />
          <Route element={<Tooltip />} path="/tooltip" />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Router

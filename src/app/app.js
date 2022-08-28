import React from 'react'
import ReactDOM from 'react-dom'

// import global components
import Router from './router'

import './assets/styles/reset.scss'
import './assets/styles/app.scss'

/**
 * App returns the global structure
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return <Router />
}

ReactDOM.render(<App />, document.querySelector('#root'))

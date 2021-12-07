import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// import global app scss
import '@/assets/styles/app.scss'

// import global components
import Router from '@/app/router'

// import global library css
import '@gabemule/react-boilerplate/main.css'

// import global store
import Store from '@/store'

/**
 * App returns the global structure
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
	return (
		<Provider store={Store}>
			<Router />
		</Provider>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)

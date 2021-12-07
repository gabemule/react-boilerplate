import React from 'react'
import PropTypes from 'prop-types'

import './bar.scss'

const Bar = ({ children }) => {
	return <div className={'bar'}>{children}</div>
}

Bar.propTypes = {
	amigo: PropTypes.any,
	children: PropTypes.any
}

export default Bar

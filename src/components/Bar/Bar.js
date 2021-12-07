import React from 'react'
import PropTypes from 'prop-types'

import './bar.scss'

const Bar = ({ children, amigo }) => {
  return (
    <div className={'bar'}>
      {amigo}
      {children}
    </div>
  )
}

Bar.propTypes = {
  amigo: PropTypes.any,
  children: PropTypes.any
}

export default Bar

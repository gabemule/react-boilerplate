import React from 'react'
import PropTypes from 'prop-types'

import '@/components/Button/button.css'

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  primary: false,
  size: 'medium'
}

export default Button

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DsButton } from '@/library/components/Button'

import ButtonConfig from '../Button/Button.config'
import IconConfig from '../Icon/Icon.config'

const ButtonExample = ({
  status,
  statusAlternative,
  progress,
  size,
  color,
  disabled,
  loadingText,
  successIcon,
  errorMessage,
  iconText,
  icon,
  children
}) => {
  const [progressState, setProgressState] = useState(0)
  const [statusState, setStatusState] = useState(status)
  const [statusAlternativeState, setStatusAlternativeState] =
    useState(statusAlternative)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setProgressState(progress)
  }, [progress])

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLoading) {
        if (progressState < 100) {
          let max = 10
          let min = 50
          let newVal =
            progressState + Math.floor(Math.random() * (max - min + 1) + min)
          newVal > 100 ? setProgressState(100) : setProgressState(newVal)
        } else {
          setStatusState('success')
          setStatusAlternativeState('error')
          setTimeout(() => {
            setProgressState(0)
            setStatusState('')
            setStatusAlternativeState('')
            setIsLoading(false)
          }, 5000)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [progressState, isLoading])

  useEffect(() => {
    setStatusState(status)
    setStatusAlternativeState(statusAlternative)
  }, [status, statusAlternative])

  const trigger = () => {
    setIsLoading(true)
    setStatusState('loading')
    setStatusAlternativeState('loading')
  }

  return (
    <>
      <DsButton
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        icon={icon}
        iconText={iconText}
        loadingText={loadingText}
        onClick={() => trigger()}
        progress={progressState}
        size={size}
        status={statusState}
        successIcon={successIcon}
      >
        {children ? children : 'Click here'}
      </DsButton>
      <br />
      <br />
      <span>Progress: </span>
      <input readOnly type="text" value={progressState} />
      <span style={{ marginLeft: '20px' }}>Status: </span>
      <input readOnly type="text" value={statusState} />
      <br />
      <br />
      <DsButton
        color={color}
        disabled={disabled}
        errorMessage={errorMessage}
        icon={icon}
        iconText={iconText}
        loadingText={loadingText}
        onClick={() => trigger()}
        progress={progressState}
        size={size}
        status={statusAlternativeState}
        successIcon={successIcon}
      >
        {children ? children : 'Click here'}
      </DsButton>
      <br />
      <br />
      <span>Progress: </span>
      <input readOnly type="text" value={progressState} />
      <span style={{ marginLeft: '20px' }}>Status: </span>
      <input readOnly type="text" value={statusAlternativeState} />
    </>
  )
}

ButtonExample.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(ButtonConfig.color.options),
  disabled: PropTypes.oneOf(ButtonConfig.disabled.options),
  errorMessage: PropTypes.string,
  icon: PropTypes.oneOf(IconConfig.props.image.options),
  iconText: PropTypes.bool,
  loadingText: PropTypes.string,
  progress: PropTypes.number,
  size: PropTypes.oneOf(ButtonConfig.size.options),
  status: PropTypes.string,
  statusAlternative: PropTypes.string,
  successIcon: PropTypes.oneOf(IconConfig.props.image.options)
}

ButtonExample.defaultProps = {
  color: 'primary',
  disabled: false,
  errorMessage: 'Tente de novo',
  icon: 'essential/info',
  iconText: false,
  loadingText: 'Carregando',
  progress: 0,
  size: 'large',
  status: '',
  successIcon: 'essential/check'
}

export { ButtonExample }

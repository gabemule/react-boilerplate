import React from 'react'

// config
import ButtonConfig from '../Button.config'
import IconConfig from '../../Icon/Icon.config'

// components
import { ButtonExample } from '@/library/components/Button'

const componentProps = {
  title: 'Old/Button/Button-Example',
  component: ButtonExample,
  argTypes: {
    size: {
      description: 'Define o tamanho do Botão',
      table: {
        category: 'Style props',
        type: { summary: 'string' }
      },
      options: ButtonConfig.size.options,
      control: { type: 'select' }
    },
    color: {
      description: 'Define a cor do Botão',
      table: {
        category: 'Style props',
        type: { summary: 'string' }
      },
      options: ButtonConfig.color.options,
      control: { type: 'select' }
    },
    disabled: {
      description: 'Desabilita o botão',
      table: {
        category: 'Style props',
        type: { summary: 'Boolean' }
      },
      options: ButtonConfig.disabled.options,
      control: { type: 'boolean' }
    },
    status: {
      description: 'Define o status do botão',
      table: {
        category: 'Loading props',
        type: { summary: 'string' }
      },
      options: ButtonConfig.status.options,
      control: { type: 'select' }
    },
    statusAlternative: {
      description: 'Define o status do segundo botão do exemplo',
      table: {
        category: 'Loading props',
        type: { summary: 'string' }
      },
      options: ButtonConfig.status.options,
      control: { type: 'select' }
    },
    loadingText: {
      description: 'Define o texto de loading',
      table: {
        category: 'Text props',
        type: { summary: 'string' }
      },
      control: { type: 'text' }
    },
    progress: {
      description: 'Define o progresso do loading. Valores entre 0 e 100',
      table: {
        category: 'Loading props',
        type: { summary: 'string' }
      },
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    successIcon: {
      description: 'Define o ícone exibido em caso de sucesso',
      table: {
        category: 'Loading props',
        type: { summary: 'string' }
      },
      options: IconConfig.props.image.options,
      control: { type: 'select' }
    },
    errorMessage: {
      description: 'Define o texto exibido no botão em caso de erro',
      table: {
        category: 'Text props',
        type: { summary: 'string' }
      },
      control: { type: 'text' }
    },
    iconText: {
      description: 'Define se o texto do botão terá um ícone ao lado',
      table: {
        category: 'Text with icon props',
        type: { summary: 'Boolean' }
      },
      options: ButtonConfig.iconText.options,
      control: { type: 'boolean' }
    },
    icon: {
      description: 'Define o ícone que será exibido ao lado do texto',
      table: {
        category: 'Text with icon props',
        type: { summary: 'string' }
      },
      options: IconConfig.props.image.options,
      control: { type: 'select' }
    }
  }
}

export default componentProps

const Template = (args) => <ButtonExample {...args}>Click here</ButtonExample>

export const Default = Template.bind({})

import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

// config
import InputConfig from "./Input.config";

// components
import { DsInput, DsInputProps } from "@/library/components/Input";
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"

const ComponentProps: Meta = {
  title: "Interação Básica/Input/Input",
  component: DsInput,
  argTypes: {
    name: {
      control: { type: "text" },
      description: "Define o name e o ID do campo",
      defaultValue: "inputName",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" }
      },
    },
    label: {
      control: { type: "text" },
      description: "Informam o que cada campo significa",
      defaultValue: "Label",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.label.default }
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Define o placeholder do campo",
      defaultValue: InputConfig.props.placeholder.default,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Text" }
      },
    },
    value: {
      control: { type: "text" },
      description: "Define o valor do campo",
      defaultValue: InputConfig.props.value.default,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.value.default }
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilita o campo",
      table: {
        category: "Style props",
        type: { summary: "Boolean" },
        defaultValue: { summary: InputConfig.props.disabled.default },
      },
      defaultValue: InputConfig.props.disabled.default,
    },
    animated: {
      control: "boolean",
      description: "Determina se o label é fixo ou flutuante",
      table: {
        category: "Style props",
        type: { summary: "Boolean" },
        defaultValue: { summary: InputConfig.props.animated.default },
      },
      defaultValue: InputConfig.props.animated.default,
    },
    type: {
      control: "select",
      description: "Determinad o tipo do campo",
      defaultValue: InputConfig.props.type.default,
      options: InputConfig.props.type.options,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.type.default }
      }
    },
    size: {
      control: "select",
      description: "Determina o tamanho do campo",
      defaultValue: InputConfig.props.size.default,
      options: InputConfig.props.size.options,
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.size.default }
      }
    },
    icon: {
      control: "select",
      description: "Seleciona o ícone do Tooltip",
      defaultValue: InputConfig.props.icon.default,
      options: InputConfig.props.icon.options,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.icon.default }
      }
    },
    tooltip: {
      control: "text",
      description: "Inclui qualquer informação ou explicação de como preencher o campo",
      defaultValue: InputConfig.props.tooltip.default,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.tooltip.default }
      }
    },
    status: {
      control: "select",
      description: "Atribui sucesso ou erro ao campo",
      defaultValue: InputConfig.props.status.default,
      options: InputConfig.props.status.options,
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.status.default }
      }
    },
    feedback: {
      control: { type: "text" },
      description: "Informa o resultado dos seus inputs. Pode ser uma mensagem positiva ou negativa",
      defaultValue: InputConfig.props.feedback.default,
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: InputConfig.props.feedback.default }
      },
    }
  },
};
export default ComponentProps;

const Template: Story<ThemeProviderProps & DsInputProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsInput onChange={action('changed')} {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  animated: false,
  value: "Input text"
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: "Olá, eu sou um tooltip.",
  icon: "help"
};

export const WithError = Template.bind({});
WithError.args = {
  feedback: "Eita, mensagem de erro aqui.",
  status: "error"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

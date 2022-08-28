import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import ButtonConfig from "./Button.config";
import IconConfig from "../Icon/Icon.config";

import { ThemeProvider, ThemeProviderProps } from "@/library/components/ThemeProvider";
import { DsButton, DsButtonProps } from "@/library/components/Button";

const componentProps: Meta = {
  title: "Interação Básica/Button/Button",
  component: DsButton,
  argTypes: {
    size: {
      name: "Size",
      type: {
        name: "string",
        required: false
      },
      defaultValue: ButtonConfig.props.size.default,
      description: "Define o tamanho do Botão",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: "large" }
      },
      control: { type: "select", options: ButtonConfig.props.size.options }
    },
    disabled: {
      name: "Disabled",
      type: {
        name: "string",
        required: false
      },
      defaultValue: ButtonConfig.props.disabled.default,
      description: "Desabilita o botão",
      table: {
        category: "Style props",
        type: { summary: "Boolean" },
        defaultValue: { summary: false }
      },
      control: { type: "boolean", }
    },
    icon: {
      name: "Icon",
      type: {
        name: "string",
        required: false
      },
      defaultValue: IconConfig.props.image.default,
      description: "Define o ícone que será exibido ao lado do texto",
      table: {
        category: "Text with icon props",
        type: { summary: "string" },
        defaultValue: { summary: "essential/info" }
      },
      options: IconConfig.props.image.options,
      control: { type: "select", }
    },
    type: {
      name: "Type",
      type: {
        name: "string",
        required: false
      },
      defaultValue: ButtonConfig.props.type.default,
      description: "Define o ícone que será exibido ao lado do texto",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: "essential/info" }
      },
      options: ButtonConfig.props.type.options,
      control: { type: "select", }
    }
  }
};

export default componentProps;


const Template: Story<ThemeProviderProps & DsButtonProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsButton {...args}> Click here </DsButton>
  </ThemeProvider>
);

const TemplateNoProps: Story<ThemeProviderProps & DsButtonProps> = () => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsButton> Button with no props </DsButton>
  </ThemeProvider>
);

const defaultProps = {
  onClick: action("clicked"),
  disabled: false,
  size: "large",
}

export const Default = Template.bind({});
Default.args = { ...defaultProps };

export const NoProps = TemplateNoProps.bind({});
NoProps.args = {};

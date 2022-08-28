import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import SubtitleConfig from "./Subtitle.config";

// components
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"
import { DsSubtitle, DsSubtitleProps } from "@/library/components/Subtitle";

const ComponentProps: Meta = {
  title: "Interação Básica/Typography/Subtitle",
  component: DsSubtitle,
  argTypes: {
    type: {
      description: "Define o tamanho do texto",
      table: {
        category: "Style props",
        type: { summary: "string" },
      },
      options: SubtitleConfig.props.type.options,
      control: { type: "select" }
    }
  }
};

export default ComponentProps;

const Template: Story<ThemeProviderProps & DsSubtitleProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsSubtitle {...args}>This is a Design System Subtitle</DsSubtitle>
  </ThemeProvider>
);

const defaultProps = {
  type: "large",
}

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Small = Template.bind({});
Small.args = {
  type: "small"
};

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
};

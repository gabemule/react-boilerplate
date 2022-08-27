import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import ParagraphConfig from "./Paragraph.config";

// components
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"
import { DsParagraph, DsParagraphProps } from "@/library/components/Paragraph";

const ComponentProps: Meta = {
  title: "Interação Básica/Typography/Paragraph",
  component: DsParagraph,
  argTypes: {
    type: {
      description: "Define o tamanho do texto",
      table: {
        category: "Style props",
        type: { summary: "string" },
      },
      options: ParagraphConfig.props.type.options,
      control: { type: "select" }
    },
  }
};

export default ComponentProps;

const Template: Story<ThemeProviderProps & DsParagraphProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsParagraph {...args}>This is a Design System Text</DsParagraph>
  </ThemeProvider>
);

const defaultProps = {
  type: "small",
}

export const Default = Template.bind({});
Default.args = {
  ...defaultProps
}

export const Small = Template.bind({});
Small.args = {
  ...defaultProps
};

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  type: "large",
};

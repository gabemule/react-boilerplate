import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import HeadingConfig from "./Heading.config";

// components
import { DsHeading, DsHeadingProps } from "@/library/components/Heading";
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"

const ComponentProps: Meta = {
  title: "Interação Básica/Typography/Heading",
  component: DsHeading,
  argTypes: {
    type: {
      description: "Define qual tag será usada. Ex.: type=\"display\" = h1, type=\"x-large\" = h2 ...",
      table: {
        category: "Style props",
        type: { summary: "string" },
      },
      options: HeadingConfig.props.type.options,
      control: { type: "select" }
    },
  },
};
export default ComponentProps;

const Template: Story<ThemeProviderProps & DsHeadingProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsHeading {...args}>This is a Design System Heading</DsHeading>
  </ThemeProvider>
);

const defaultProps = {
  type: "display",
};


export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};

export const Display = Template.bind({});
Display.args = {
  ...defaultProps
};

export const XLarge = Template.bind({});
XLarge.args = {
  type: "x-large",
};

export const Large = Template.bind({});
Large.args = {
  type: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "medium",
};

export const Small = Template.bind({});
Small.args = {
  type: "small",
};

export const XSmall = Template.bind({});
XSmall.args = {
  type: "x-small",
};

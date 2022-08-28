import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import CaptionConfig from "./Caption.config";

// components
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"
import { DsCaption, DsCaptionProps } from "@/library/components/Caption";

const componentProps: Meta = {
  title: "Interação Básica/Typography/Caption",
  component: DsCaption,
};

export default componentProps;

const Template: Story<ThemeProviderProps & DsCaptionProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsCaption {...args}>This is a Design System Caption</DsCaption>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};


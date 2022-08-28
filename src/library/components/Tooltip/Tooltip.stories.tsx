import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import TooltipConfig from "./Tooltip.config";

// components
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"
import { DsTooltip, DsTooltipProps } from "@/library/components/Tooltip";
import { DsParagraph, DsParagraphProps } from "@/library/components/Paragraph";
import { DsIcon, DsIconProps } from "@/library/components/Icon";

const ComponentProps: Meta = {
  title: "Interação Básica/Tooltip/Tooltip",
  component: DsTooltip,
  argTypes: {
    position: {
      defaultValue: TooltipConfig.props.position.default,
      description: "Define a posição do tooltip",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: TooltipConfig.props.position.default },
      },
      options: TooltipConfig.props.position.options,
      control: { type: "select" },
    },
    placement: {
      defaultValue: TooltipConfig.props.placement.default,
      description: "Define a colocação do tooltip",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: TooltipConfig.props.placement.default },
      },
      options: TooltipConfig.props.placement.options,
      control: { type: "select" },
    },
    text: {
      control: { type: "text" },
      description: "Define o texto que será exibido no tooltip",
      defaultValue: "Hello, I'm a Tooltip",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: "Hello, I'm a Tooltip" },
      },
    },
  },
};

export default ComponentProps;

const Template: Story<ThemeProviderProps & DsTooltipProps & DsParagraphProps & DsIconProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"}>
    <DsParagraph>
      This is a Tooltip component.<br />
      Are you seeing him? Try hovering <DsTooltip {...args}><u><b>here</b></u></DsTooltip> and see.<br />
      Click to lock Tooltip as shown.
    </DsParagraph>
    <DsParagraph>
      Oh, and it also supports icon <DsTooltip {...args}><DsIcon image="help" /></DsTooltip>
    </DsParagraph>
  </ThemeProvider>
);

const defaultProps = {
  position: "top",
  placement: "center"
}

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Bottom = Template.bind({});
Bottom.args = {
  ...defaultProps,
  position: "bottom"
};

export const Right = Template.bind({});
Right.args = {
  ...defaultProps,
  position: "right"
};

export const Left = Template.bind({});
Left.args = {
  ...defaultProps,
  position: "left"
};

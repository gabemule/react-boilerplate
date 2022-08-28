import React from "react";
import { Meta, Story } from "@storybook/react"

// config
import IconConfig from "./Icon.config";

// components
import { DsIcon, DsIconProps } from "@/library/components/Icon";
import { ThemeProvider, ThemeProviderProps } from "@/library/components/ThemeProvider";

const typesOfIcons = [
  { title: "Essential", start: 57, qtd: 100 },
  { title: "Player", start: 124, qtd: 145 },
  { title: "Nav", start: 101, qtd: 123 },
  { title: "Content and Message", start: 13, qtd: 48 },
  { title: "Social Media", start: 146, qtd: 158 },
  { title: "Arrows", start: 1, qtd: 12 },
  { title: "Ecommerce", start: 49, qtd: 56 },
];

const ComponentProps: Meta = {
  title: "Interação Básica/Icon/Icon",
  component: DsIcon,
  argTypes: {
    image: {
      description: "Nome do Icon desejado, deve seguir o padrão 'Nome-do-Icon'. Ex.: image='arrow-back' ",
      table: {
        category: "Image props",
        type: { summary: "string" },
        defaultValue: IconConfig.props.image.default,
      },
      options: IconConfig.props.image.options,
      control: { type: "select" }
    },
    color: {
      description: "Define a cor do icon, o padrão é preto",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: IconConfig.props.color.default },
      },
      defaultValue: IconConfig.props.color.default,
      options: IconConfig.props.color.options,
      control: { type: "select" }
    }
  },
};

export default ComponentProps;

const Template: Story<ThemeProviderProps & DsIconProps> = (args) => (
  <ThemeProvider library={"core"} theme={"light"} >
    <DsIcon {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  image: IconConfig.props.image.default,
  color: IconConfig.props.color.default,
};

const ListTemplate: Story<ThemeProviderProps & DsIconProps> = (args) => {
  return (
    <ThemeProvider library={"core"} theme={"light"}>
      <div style={{ display: "flex", flexWrap: "wrap", borderWidth: "1px", borderColor: "black", borderStyle: "solid" }}>
        {typesOfIcons.map((type, index) =>
          <>
            <h3 style={{ margin: '10px', fontFamily: 'sans-serif' }}>{type.title}</h3>
            <div key={index} style={{ display: "flex", flexWrap: "wrap", borderWidth: "1px", borderColor: "black", borderStyle: "solid", margin: 10, width: "100%" }}>
              {IconConfig.props.image.options
                .filter((item: String, index: Number) => index >= type.start && index <= type.qtd)
                .map((item: string) =>
                  <div key={item} style={{ margin: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <DsIcon color={args.color} image={item} />
                    <p style={{ fontSize: "0.7rem" }}>{item}</p>
                  </div>
                )}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};



export const List = ListTemplate.bind({});
List.args = {}

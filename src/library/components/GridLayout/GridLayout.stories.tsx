import React from "react";
import { Meta, Story } from "@storybook/react";

// config
import GridConfig from "./GridLayout.config";

// components
import { ThemeProviderProps, ThemeProvider } from "@/library/components/ThemeProvider"
import { DsGridLayout, DsGridLayoutProps, DsGridElement } from "@/library/components/GridLayout";

const componentProps: Meta = {
  title: "Grid/GridLayout",
  component: DsGridLayout,
  argTypes: {
    gap: {
      description: "Define o gap (gutter) entre os elementos do grid.",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: GridConfig.props.gap.default, }
      },
      control: {
        type: "text",
        defaultValue: { summary: GridConfig.props.width.default }
      }
    },
    rows: {
      description: "Define a quantidade de linhas no grid.",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: GridConfig.props.rows.default, }
      },
      control: {
        type: "text",
        defaultValue: { summary: GridConfig.props.rows.default }
      }
    },
    width: {
      description: "Define a largura do grid",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: GridConfig.props.width.default, }
      },
      control: {
        type: "text",
        defaultValue: { summary: GridConfig.props.width.default }
      }
    },
    height: {
      description: "Define a altura do grid",
      table: {
        category: "Style props",
        type: { summary: "string" }
      },
    },
    horizontalAlign: {
      description: "Define o alinhamento horizontal",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: GridConfig.props.horizontalAlign.default, }
      },
      control: {
        type: "select",
        defaultValue: { summary: GridConfig.props.horizontalAlign.default }
      },
      options: GridConfig.props.horizontalAlign.options,
    },
    verticalAlign: {
      description: "Define o alinhamento vertical",
      table: {
        category: "Style props",
        type: { summary: "string" },
        defaultValue: { summary: GridConfig.props.verticalAlign.default, }
      },
      control: {
        type: "select",
        defaultValue: { summary: GridConfig.props.verticalAlign.default }
      },
      options: GridConfig.props.verticalAlign.options,
    }
  }
};

const Template: Story<ThemeProviderProps & DsGridLayoutProps> = (args) =>
  <DsGridLayout {...args}>
    <DsGridElement grid={{ row: '1', col: '1/5', mobileRow: '1', mobileCol: '1/3' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'1', col:'1/5' <br /> mobileRow:'1', mobileCol:'1/3' </div>
    </DsGridElement>
    <DsGridElement grid={{ row: '1', col: '5/9', mobileRow: '1', mobileCol: '3/5' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'1', col:'5/9' <br /> mobileRow:'1', mobileCol:'3/5' </div>
    </DsGridElement>
    <DsGridElement grid={{ row: '2', col: '1/3', mobileRow: '2', mobileCol: '1/4' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'2', col:'1/3' <br /> mobileRow:'2', mobileCol:'1/4' </div>
    </DsGridElement>
    <DsGridElement grid={{ row: '2', col: '3/9', mobileRow: '2', mobileCol: '4/5' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'2', col:'3/9' <br /> mobileRow:'2', mobileCol:'4/5' </div>
    </DsGridElement>
    <DsGridElement grid={{ row: '3', col: '1/7', mobileRow: '3', mobileCol: '1/2' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'3', col:'1/7' <br /> mobileRow:'3', mobileCol:'1/2' </div>
    </DsGridElement>
    <DsGridElement grid={{ row: '3', col: '7/9', mobileRow: '3', mobileCol: '2/5' }}>
      <div style={{ display: 'flex', height: "100%", borderRadius: "4px", color: "white", backgroundColor: "#47C8C3", alignItems: "center", justifyContent: "center" }}> row:'3', col:'7/9' <br /> mobileRow:'3', mobileCol:'2/5' </div>
    </DsGridElement>
  </DsGridLayout>;

export default componentProps;


export const Default = Template.bind({});
Default.args = { gap: "12px", height: "400px" };

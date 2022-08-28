import "@gabemule/design-system/themes/core-theme.css";
import "@gabemule/design-system/themes/digital-theme.css";
import "@gabemule/design-system/themes/bees-theme.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

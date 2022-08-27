import React, { ReactNode } from "react";
import PropTypes from "prop-types";

// styles
// import "@/assets/styles/app.scss";

export interface ThemeProviderProps {
  library: string;
  children: ReactNode;
  theme: string;
}

function ThemeProvider({ library, children, theme }: ThemeProviderProps) {
  return (
    <div data-library={library} data-theme={theme}>
      <div className="ds-theme">
        {children}
      </div>
    </div>
  );
}

ThemeProvider.propTypes = {
  library: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default ThemeProvider;

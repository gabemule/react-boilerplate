import React, { useState, useEffect } from "react";

// import withCustomProps from '@/library/decorators/withCustomProps'
import PropTypes from "prop-types";

// config
import GridConfig from "./GridLayout.config";

export interface DsGridLayoutProps {
  children: JSX.Element | JSX.Element[],
  rows: string,
  cols: string,
  gap: string,
  horizontalAlign: string,
  verticalAlign: string,
  width: string,
  height: string,
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const DsGridLayout = ({ children, rows, gap, horizontalAlign, verticalAlign, width, height }: DsGridLayoutProps) => {
  const gridHorizontaAlign = horizontalAlign && GridConfig.props.horizontalAlign.options.find((value: string) => value === horizontalAlign) ? `${GridConfig.class}--h-${horizontalAlign}` : null;
  const gridVerticalAlign = verticalAlign && GridConfig.props.verticalAlign.options.find((value: string) => value === verticalAlign) ? `${GridConfig.class}--v-${verticalAlign}` : null;
  const { width: windowWidth } = useWindowDimensions();
  const [cols, setCols] = useState("");

  useEffect(() => {
    windowWidth <= 768
      ? setCols("6")
      : setCols("12")
  }, [windowWidth]);

  const isInt = (n: string) => {
    return /^[+-]?\d+$/.test(n);
  };

  const takeRows = () => {
    const row = rows
      .split(",")
      .map(elem => {
        elem = elem.trim();

        if (elem === "0" || elem === "*" || elem === "auto") {
          return "auto";
        } else if (isInt(elem)) {
          return elem + "fr";
        } else {
          return elem;
        }
      })
      .join(" ");
    return row;
  };
  const takeColumns = () => {
    const columns = cols
      .split(",")
      .map((elem: string) => {
        elem = elem.trim();
        if (elem === "0" || elem === "*" || elem === "auto") {
          return "auto";
        } else if (isInt(elem)) {
          return elem;
        } else {
          return elem;
        }
      })
      .join(" ");

    return `repeat(${columns}, minmax(0, 1fr))`;
  };

  return (
    <div
      className={[GridConfig.class, gridHorizontaAlign, gridVerticalAlign].filter(classes => classes).join(" ")}
      style={{ display: "grid", gap: gap, width: width, height: height, gridTemplateColumns: takeColumns(), gridTemplateRows: takeRows() }}
    >
      {children}
    </div>
  );
}

DsGridLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ]),
  rows: PropTypes.string,
  gap: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  horizontalAlign: PropTypes.oneOf(GridConfig.props.horizontalAlign.options),
  verticalAlign: PropTypes.oneOf(GridConfig.props.verticalAlign.options)
};

DsGridLayout.defaultProps = {
  rows: GridConfig.props.rows.default,
  gap: GridConfig.props.gap.default,
  width: GridConfig.props.width.default,
  height: GridConfig.props.height.default,
  horizontalAlign: GridConfig.props.horizontalAlign.default,
  verticalAlign: GridConfig.props.verticalAlign.default,
};

export default DsGridLayout;

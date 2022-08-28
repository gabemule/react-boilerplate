import React, { useState, useEffect } from 'react'
import { DsGridElementProps } from '@/library/types/types'

type DsGridElementType = {
  children: string | React.ReactElement,
  grid: DsGridElementProps
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

const DsGridElement = ({ children, grid }: DsGridElementType) => {
  const { row, col, mobileRow, mobileCol } = grid
  const { width } = useWindowDimensions();
  const [gridRow, setGridRow] = useState("")
  const [gridCol, setGridCol] = useState("")

  useEffect(() => {
    if (width <= 768) {
      setGridRow(mobileRow ? mobileRow : row)
      setGridCol(mobileCol ? mobileCol : col)
    } else {
      setGridRow(row)
      setGridCol(col)
    }
  }, [width]);

  return (
    <div style={{ gridRow: gridRow, gridColumn: gridCol }}>
      {children}
    </div>
  )
}

export default DsGridElement

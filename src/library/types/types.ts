export interface DsAccordionItemProps {
  index?: number,
  title: string,
  content: string,
  disabled?: boolean,
  className?: string,
}

export interface DsGridElementProps {
  row: string,
  col: string,
  mobileRow?: string,
  mobileCol?: string,
}

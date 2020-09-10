/* Items de las secciones aside */
export interface IAsideItems {
  name: string;
  state?: boolean;
  iconName?: string;
  tooltip?: string;
  itemCode?: string;
  urlName?: string;
}
/* Secciones del aside menu */
export interface IAsideSections {
  title?: string;
  code?: string;
  items?: IAsideItems[];
}

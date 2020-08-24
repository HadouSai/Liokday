export interface ITheme {
  name: string;
  propertys?: {};
}

export const lightTheme: ITheme = {
  name: 'light',
  propertys: {
    "--spec-wrapper-primary": '#fff',
  }
}

export const darkTheme: ITheme = {
  name: 'dark',
  propertys: {
    "--spec-wrapper-primary": '#303237',
  }
}

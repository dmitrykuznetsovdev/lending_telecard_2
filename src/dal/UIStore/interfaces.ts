interface IStyle {
  bg: string;
  logo: string;
  colorText: string;
}

export interface IGlobalTheme {
  secondary: IStyle;
  primary: IStyle;
}

export interface IUIStore {
  globalTheme: IGlobalTheme;
  changeGlobalThemeAction: (theme: IGlobalTheme) => void;
  invertGlobalThemeAction: () => void;
  isMobile: boolean;
}

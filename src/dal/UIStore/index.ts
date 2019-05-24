import { computed, observable, action } from 'mobx';
import MobileDetect from 'mobile-detect';

import { provide } from '../IoC';

import { IUIStore, IGlobalTheme } from './interfaces';

const md = new MobileDetect(window.navigator.userAgent);

@provide.singleton()
class UIStore implements IUIStore {
  defaultTheme: IGlobalTheme = {
    primary: {
      bg: '#1C45DF',
      logo: '#fff',
      colorText: '#fff',
    },
    secondary: {
      bg: '#fff',
      logo: '#000',
      colorText: '#000',
    },
  };

  invertTheme: IGlobalTheme = {
    primary: this.defaultTheme.secondary,
    secondary: this.defaultTheme.primary,
  };

  @observable globalTheme: IGlobalTheme;

  constructor() {
    this.globalTheme = this.defaultTheme;
  }

  @computed get isMobile(): boolean {
    return Boolean(md.mobile());
  }

  @action.bound
  changeGlobalThemeAction(theme: IGlobalTheme) {
    this.globalTheme = theme;
  }

  @action.bound
  invertGlobalThemeAction() {
    this.globalTheme = this.invertTheme;
  }
}

export default UIStore;

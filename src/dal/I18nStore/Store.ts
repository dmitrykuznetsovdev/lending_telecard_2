import { action, observable, reaction } from 'mobx';
import i18n from 'i18next';
import { RouterStore } from 'mobx-react-router';

import { lazyInject, provide } from '../IoC';

import { i18nInstanceKey } from './i18n';

@provide.singleton()
export default class I18nStore {
  @lazyInject(i18nInstanceKey)
  protected readonly i18nInstance: i18n.i18n;

  @lazyInject(RouterStore)
  protected readonly routerStore: RouterStore;

  @observable
  locale: string;

  @observable
  t = (key: string, params?: any): string => this.i18nInstance.t(key, params);

  constructor() {
    this.locale = this.i18nInstance.languages[0];

    reaction(
      () => this.locale,
      (curlocale: string) => {
        this.i18nInstance.changeLanguage(curlocale);
      }
    );
  }

  @action.bound
  changeLanguageAction(name: string) {
    this.locale = name;
    this.routerStore.replace({
      search: `locale=${name}`,
    });
  }
}

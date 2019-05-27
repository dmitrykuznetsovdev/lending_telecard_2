import { inject, IReactComponent } from 'mobx-react';

import { container } from './IoC';
import UIStore from './UIStore';
import I18nStore from './I18nStore/Store';

export const withIntl = (Component: IReactComponent<any>): IReactComponent<any> =>
  inject(() => ({
    t: container.get(I18nStore).t,
    locale: container.get(I18nStore).locale,
  }))(Component);


export const withIsMobile = (Component: IReactComponent<any>): IReactComponent<any> =>
  inject(() => ({
    isMobile: container.get(UIStore).isMobile,
    uiStore: container.get(UIStore),
  }))(Component);

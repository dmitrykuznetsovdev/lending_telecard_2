import { inject, IReactComponent } from 'mobx-react';

import { container } from './IoC';
import UIStore from './UIStore';

export const withIsMobile = (Component: IReactComponent<any>): IReactComponent<any> =>
  inject(() => ({
    isMobile: container.get(UIStore).isMobile,
    uiStore: container.get(UIStore),
  }))(Component);

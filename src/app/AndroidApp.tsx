import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';

import UIStore from '../dal/UIStore';
import { withIsMobile, withIntl } from '../dal/commonDecorators';
import { GlobalStyle } from '../assets/normalize';
import { lazyInject } from '../dal/IoC';

import { AndroidPageLazy } from './Routes';
import { AppComponent, Content } from './style';

interface IProps {
  isMobile: boolean;
}

interface IState {
  isOpenMobileMenu: boolean;
}

@observer
class Application extends Component<IProps, IState> {
  @lazyInject(RouterStore)
  routing: RouterStore;

  @lazyInject(UIStore)
  ui: UIStore;

  state = {
    isOpenMobileMenu: false,
  };

  constructor(props: IProps) {
    super(props);
    document.title = 'Telecard 2.0 android';
  }

  render() {
    const { isMobile } = this.props;
    const { globalTheme } = this.ui;

    return (
      <ThemeProvider theme={globalTheme}>
        <AppComponent>
          <GlobalStyle theme={globalTheme} />
          <Content isMobile={isMobile}>
            <Switch>
              <Route component={AndroidPageLazy} path="/" exact={true} />
            </Switch>
          </Content>
        </AppComponent>
      </ThemeProvider>
    );
  }
}

export default withRouter<any>(withIsMobile(withIntl(Application)));

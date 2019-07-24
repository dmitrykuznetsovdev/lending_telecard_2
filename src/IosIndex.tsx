import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import * as mobx from 'mobx';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { RouterStore } from 'mobx-react-router';

import browserHistory from './app/history';
import Application from './app/IosApp';
import * as serviceWorker from './serviceWorker';
import { container } from './dal/IoC';
import boot from './bootstrap';
import './assets/fonts';

window['__localeData__'] = {};

mobx.configure({ enforceActions: 'observed' });

const routingStore = container.get(RouterStore);
const history = syncHistoryWithStore(browserHistory, routingStore);

function initApp() {
  ReactDOM.render(
    <Router history={history}>
      <Application />
    </Router>,
    document.getElementById('root') as HTMLElement
  );
}

document.addEventListener('DOMContentLoaded', () => {
  boot()
    .then(initApp)
    /* eslint-disable-next-line */
    // tslint:disable-next-line
    .catch(e => console.warn(`%c ${e}`, 'background: #222; color: #bada55'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

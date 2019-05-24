import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Root } from './style';

@observer
class RootPage extends Component {
  render() {
    return (
      <Root>
        <h1>WELCOME</h1>
      </Root>
    );
  }
}

export default RootPage;

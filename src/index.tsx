import {ConnectedRouter} from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {Root} from "./containers";
import store, {history} from './store';
import {GlobalStyle, theme, ThemeProvider} from "./styles";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <Root/>
        </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();

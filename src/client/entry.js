/*global document, require, React*/

import React from 'react';
import {render} from 'react-dom';
import routes from '../shared/routes';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import darkTheme from 'material-ui/lib/styles/raw-themes/dark-raw-theme';
import Provider from 'src/shared/components/Provider';
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

require('../shared/style/main.scss');

render(
  <Provider muiTheme= {ThemeManager.getMuiTheme(darkTheme)}>
    {routes}
  </Provider>,
  document.getElementById('app')
)

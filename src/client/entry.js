import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import routes from '../shared/routes';


import App from 'src/shared/components/App';
import Home from 'src/shared/components/Home';
import About from 'src/shared/components/About';

render(
  routes,
  document.getElementById('app')
);

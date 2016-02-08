import { Router,Route, IndexRoute,browserHistory } from 'react-router';
import React from 'react';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

export default (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
      <Route path='about' component={About}/>
    </Route>
  </Router>
);

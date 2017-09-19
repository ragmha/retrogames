import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { Home, Welcome, About, Contact, Archive } from './components';
import { AddGame, Games } from './containers';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Welcome} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Route>
    <Route path="/games" component={Archive}>
      <IndexRoute component={Games} />
      <Route path="add" component={AddGame} />
    </Route>
  </Router>
);

export default routes;

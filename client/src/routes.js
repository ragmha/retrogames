import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';

import { Home, Welcome, About, Contact, Archive } from './components';
import { AddGame, Games } from './containers';

const store = configureStore();

const routes = (
  <Provider store={store}>
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
  </Provider>
);

export default routes;

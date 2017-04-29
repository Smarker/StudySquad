'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { clearSearch } from './actions';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './MainLayout';
import '/imports/client/pages/home/routes';
import '/imports/client/pages/login/routes';
import '/imports/client/pages/post/routes';
import '/imports/client/pages/searchResults/routes';
import '/imports/client/pages/data/routes';
import pages from '/imports/client/pages/pages';

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainLayout} onChange={() => store.dispatch(clearSearch)}>
        {pages}
      </Route>
    </Router>
  </Provider>
)

export default Routes;
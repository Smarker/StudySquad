'use strict';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './MainLayout';
import '/imports/client/pages/home/routes';
import '/imports/client/pages/login/routes';
import '/imports/client/pages/post/routes';
import '/imports/client/pages/searchResults/routes';
import '/imports/client/pages/data/routes';
import pages from '/imports/client/pages/pages';

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      {pages}
    </Route>
  </Router>
)

export default Routes;
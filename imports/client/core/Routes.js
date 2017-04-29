'use strict';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import '/imports/client/pages/pages'
import '/imports/client/pages/home/routes';
import '/imports/client/pages/login/routes';
import '/imports/client/pages/post/routes';
import '/imports/client/pages/searchResults/routes';

import MainLayout from '../MainLayout';

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout} />
    {pages}
  </Router>
)

export default Routes;
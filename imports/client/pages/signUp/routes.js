'use strict'

import React from 'react';
import { Route } from 'react-router';
import pages from '../pages';
import SignUp from './SignUp';

const SIGN_UP_ROUTE = '/sign-up';

pages.push(<Route key={SIGN_UP_ROUTE} path ={SIGN_UP_ROUTE} component={SignUp} />);

export default SIGN_UP_ROUTE;
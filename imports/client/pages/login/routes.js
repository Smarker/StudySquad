'use strict'

import React from 'react';
import { Route } from 'react-router';
import pages from '../pages';
import Login from './Login';

const LOGIN_ROUTE = '/login';

pages.push(<Route key={LOGIN_ROUTE} path ={LOGIN_ROUTE} component={Login} />)
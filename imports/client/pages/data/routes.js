'use strict'

import React from 'react';
import { Route } from 'react-router';
import DataForm from './DataForm';
import pages from '../pages';

const DATA_ROUTE = '/data';

pages.push(<Route key={DATA_ROUTE} path ={DATA_ROUTE} component={DataForm} />);

export default DATA_ROUTE;
'use strict'

import React from 'react';
import { Route } from 'react-router';
import pages from '../pages';
import SearchResults from './SearchResults';

const SEARCH_RESULTS = '/search/:schoolId/:classId';

pages.push(<Route key={SEARCH_RESULTS} path ={SEARCH_RESULTS} component={SearchResults} />);

export default SEARCH_RESULTS;

'use strict'

import React from 'react';
import { IndexRoute } from 'react-router';
import pages from '../pages';
import Home from './Home';

pages.push(<IndexRoute key='index' component={Home} />);
'use strict'

import React from 'react';
import { IndexRoute } from 'react-router';
import pages from '../pages';
import HomeContainer from './Home';

pages.push(<IndexRoute key='index' component={HomeContainer} />);
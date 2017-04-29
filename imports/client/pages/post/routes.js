'use strict'

import React from 'react';
import { Route } from 'react-router';
import pages from '../pages';
import Post from './Post';

const POST_ROUTE = '/post/:postId';

pages.push(<Route key={POST_ROUTE} path ={POST_ROUTE} component={Post} />);

export default POST_ROUTE;
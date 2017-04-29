'use strict'

import React from 'react';
import { Route } from 'react-router';
import pages from '../pages';
import AddPost from './AddPost';

const ADD_POST_ROUTE = '/addPost';

pages.push(<Route key={ADD_POST_ROUTE} path ={ADD_POST_ROUTE} component={AddPost} />);

export default ADD_POST_ROUTE;
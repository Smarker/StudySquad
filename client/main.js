'use strict';
import { Meteor } from 'meteor/meteor'
import { React } from 'react';
import { render } from 'react-dom';
import Routes from '/imports/client/core/Routes';

Meteor.startup(() => {

  console.log(Routes);

  render(Routes, document.getElementById('root'));
});

'use strict'
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo';

User = new SimpleSchema({
  _id: schema.ID,
  firstName: {
    type: String,
    label: 'First Name',
    optional: false
  },
  lastName: {
    type: String,
    label: 'Last Name',
    optional: false
  },
  email: {
    type: String,
    label: 'Email',
    optional: false
    
  },
  password: {
    type: String,
    label: 'Password',
    optional: false
  },
  username: {
    type: String,
    label: 'User',
    optional: false
  }
});

Meteor.users.attachSchema(User)
'use strict'
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo';

User = new SimpleSchema({
  firstName: {
    type: String,
    label: 'First Name',
    required: true
  },
  lastName: {
    type: String,
    label: 'Last Name',
    required: true
  },
  email: {
    type: String,
    label: 'Email',
    required: true
  },
  password: {
    type: String,
    label: 'Password',
    requird: true
  }
});

export default User;
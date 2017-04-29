'use strict'
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo';

const Universities = new Mongo.Collection('Universities');

const University = new SimpleSchema({
  name: {
    type: String,
    label: 'University',
    optional: false
  },
  subject: {
    type: schema.subject
  }
})
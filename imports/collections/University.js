'use strict'
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo';

const Universities = new Mongo.Collection('Universities');

const University = SimpleSchema({
  name: {
    type: String,
    label: 'University Name',
    optional: false
  },
  subject: {
    type: [schema.subject]
  }

})

Universities.attachSchema(University);

export default Universities;


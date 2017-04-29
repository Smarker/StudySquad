'use strict'
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import schema from './CommonSchema';
import { Mongo } from 'meteor/mongo';

const Universities = new Mongo.Collection('Universities');
// console.log(schema.subject);
// const University = new SimpleSchema({
//   name: {
//     type: String,
//     label: 'University Name',
//     optional: false
//   },
//   subject: {
//     type: [schema.subject],
//     optional: true
//   }

// })

// Universities.attachSchema(University);

export default Universities;


'use strict'
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'
import { Mongo } from 'meteor/mongo';
import schema from 'commonSchema';

const Posts = new Mongo.Collection('Posts');

const Post = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    optional: false
  },
  description: {
    type: String,
    label: 'Description',
    optional: false
  },
  likes: {
    type: SimpleSchema.Integer,
    label: 'Likes',
    autoValue: function () {
      if(this.isInsert) {
        return 0;
      }
    },
    optional: false,
  },
  createdDate: {
    type: Date,
    label: 'Created Date',
    autoValue: function () {
      if(this.isInsert) {
        return new Date();
      }
    },
    optional: false
  },
  attachmentNumber: {
    type: SimpleSchema.Integer,
    label: 'Attachment Number',
    optional: false
  },
  createdBy: {
    type: String,
    label: 'Created by',
    autoValue: Meteor.user().username,
    optional: false
  },
  school: {
    type: String,
    label: 'School',
    optional: false,
  },
  subject: {
    type: String,
    label: 'Subject',
    optional: false
  },
  documents: {
    type: [schema.documents]
  }
})

Posts.attachSchema(Post);

export default Posts;
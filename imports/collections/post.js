'use strict'
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo';
import schema from 'commonSchema';

const Posts = new Mongo.Collection('Posts');

const Post = new SimpleSchema({
  _id: schema.ID,
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
    type: Number,
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
    type: Number,
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
  }
})

Posts.attachSchema(Post);

export default Posts;
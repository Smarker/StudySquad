import { Meteor } from 'meteor/meteor';
import Posts from '/collections/PostSchema';
Meteor.startup(() => {
  // if (Meteor.isServer) {
  //   Posts._ensureIndex({
  //     "school": "text",
  //     "class": "text",
  //     "description": "text",
  //     "title": "text"
  //   });
  // }
  // db.Posts.createIndex({description: 'text', school:'text', class:'text'});
});

Meteor.methods({
  search(text) {
    return Posts.find({ $text: {$search: text}}).fetch();
  }
})
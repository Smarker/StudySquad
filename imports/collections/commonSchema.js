import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const schema = {};

schema.subject = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
});

schema.documents = new SimpleSchema({
  document: {
    type: String,
    labe: 'Document base64'
  }
})

export default schema;
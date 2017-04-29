import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const schema = {};

schema.subject = new SimpleSchema({
  name: {
    type: String, 
    label: 'Subject'
  }
})

schema.document = new SimpleSchema({
  document: {
    type: String,
    label: 'Document base64'
  }
})

export default schema;
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const schema = {};

schema.ID = {
  type: SimpleSchema.RegEx.Id,
  label: 'Mongo ID',
  autoValue: function () {
    if (this.isInsert && (this.value && !this.value._str)) {
      return new Mongo.ObjectID();
    }
  }
}

export default schema;
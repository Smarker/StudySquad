import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import Schools from '/imports/collections/SchoolSchema';

export default class DataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      class: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("You inserted: " + this.state.school + " " + this.state.class);

    /*
    check if the school exists in mongo
      if yes
        insert class in the array
      else 
        create new school state pair in mongo
    */

    console.log("you should see nothing " + db.Schools.find({}));
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>School</label>
          <input 
            placeholder='School'
            type='text'
            value={this.state.school}
            onChange={(event) => handleChange(this, 'school', event.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Class</label>
          <input 
            placeholder='Class'
            type='text'
            value={this.state.class}
            onChange={(event) => handleChange(this, 'class', event.target.value)}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
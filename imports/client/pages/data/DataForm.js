import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import Universities from '/imports/collections/University';

export default class DataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      university: '',
      class: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("You inserted: " + this.state.university + " " + this.state.class);

    /*
    check if the university exists in mongo
      if yes
        insert class in the array
      else 
        create new university state pair in mongo
    */

    console.log("you should see nothing " + db.Universities.find({}));

    e.preventDefault();
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>University</label>
          <input 
            placeholder='University'
            type='text'
            value={this.state.university}
            onChange={(event) => handleChange(this, 'university', event.target.value)}/>
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
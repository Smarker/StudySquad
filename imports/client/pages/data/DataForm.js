import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import Schools from '/collections/SchoolSchema';

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
    let school = Schools.findOne({name: this.state.school});
    if(school) {
      let classes = school.classes;
      classes.push({
        name: this.state.class,
      });
      Schools.update({_id: school._id}, {$set: {classes: classes}})
    } else {
      let clas = {
        name: this.state.class
      }
      Schools.insert({name: this.state.school, classes: [clas]})
    }
    /*
    check if the school exists in mongo
      if yes
        insert class in the array
      else 
        create new school state pair in mongo
    */
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
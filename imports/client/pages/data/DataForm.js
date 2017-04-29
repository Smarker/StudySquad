import React from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class DataForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      university: '',
      class: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log("you put in " + e.target.university + " " + e.target.class);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      university: e.target.university,
      class: e.target.class
    });
  }
  
  render() {
    return (
      <Form>
        <Form.Field>
          <label>University</label>
          <input placeholder='University' value={this.state.university} onChange={null}/>
        </Form.Field>
        <Form.Field>
          <label>Class</label>
          <input placeholder='Class' value={this.state.class} onChange={null}/>
        </Form.Field>
        <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
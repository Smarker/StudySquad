'use strict'
import React from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import { createContainer } from 'meteor/react-meteor-data';
import { Random } from 'meteor/random'
import Schools from '/collections/SchoolSchema';

class AddPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      schools: props.schools,
      classes: props.classes,
      school: '',
      clas: '',
      title: '',
      description: ''
    }
    this.onAddSchool = this.onAddSchool.bind(this);
    this.onAddClass = this.onAddClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit (event) {
    event.preventDefault();
    let school = Schools.findOne({name: this.state.school});
    if (school) {
      let classes = [...school.classes];
      classes.push(this.state.class);
      Schools.update({name: this.state.school}, {$set: {classes: classes}})
    } else {
      Schools.insert({name: this.state.school, class: [this.state.class]})
    }


    //todo: now create the post
    //TODO : add message to display as success submits successfully
  }

  onAddSchool (event, props) {
    let currentSchools = [...this.state.schools];
    currentSchools.push({
      text: props.value,
      value:  props.value
    });
    this.setState({
      schools: currentSchools,
      school: props.value
    })
  }

  onAddClass (event, props) {
    let currentClasses = [...this.state.classes];
    currentClasses.push({
      text: props.value,
      value: props.value
    });
    this.setState({
      classes: currentClasses,
      clas: props.value
    });
  }

  handleChange (property, value) {
    let obj = {};
    obj[property] = value;
    this.setState(obj);
  }

  render () {

    let schoolOptions = this.state.schools.map((school) => {
      return {
        text: school.name,
        value: school.id
      }
    });

    let classOptions = this.state.classes.map((clas) => {
      return {
        text: clas.name,
        value: clas.id
      }
    });
    console.log(this.state.schools);
    console.log(this.state.school);

    return (
      <Form>  
        <Form.Group>
          <Form.Field required width={8}>
            <label>School</label>
            <Dropdown
              search
              selection
              allowAdditions
              placeholder='Choose a school'
              options={this.state.schools}
              value={this.state.school}
              onAddItem={this.onAddSchool}
              onChange={(event, props) => this.handleChange('school', props.value)} />
          </Form.Field>
          <Form.Field required width={8}>
            <label>Class</label>
            <Dropdown
              search
              selection
              allowAdditions
              placeholder='Choose a class'
              options={this.state.classes}
              value={this.state.clas}
              onAddItem={this.onAddClass}
              onChange={(event, props) => this.handleChange('clas', props.value)} />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field
            width={16}
            required
            control='Input'
            label='Title'
            type='text'
            placeholder='Give your post a title' 
            value={this.state.title}
            onChange={(event) => handleChange(this, 'title', event.target.value) }/>
        </Form.Group>
        <Form.Group>
          <Form.Field
            width={16}
            required
            control='TextArea'
            label='Description'
            type='text'
            placeholder='Describe your post' 
            value={this.state.description}
            onChange={(event) => handleChange(this, 'description', event.target.value) }/>
        </Form.Group>
        <Button type='submit' positive floated='right' onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}

let AddPostContainer = createContainer((props) => {
  let schools = [];
  let classes = [];
  return {schools, classes};
}, AddPost);

export default AddPostContainer;
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
      class: '',
      title: '',
      description: ''
    }
    this.onAddSchool = this.onAddSchool.bind(this);
    this.onAddClass = this.onAddClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if(this.props != nextProps) {
      this.state = {
        schools: nextProps.schools,
        classes: nextProps.classes,
        school: '',
        class: '',
        title: '',
        description: ''
      }
    }
  }

  submit (event) {
    event.preventDefault();
    // let school = Schools.findOne({name: this.state.school});
    // console.log(school);
    // if (school) {
    //   let classes = school.class;
    //   classes.push(this.state.classes);
    //   Schools.update({name: this.state.school}, {$set: {classes: classes}})
    // } else {
    //   Schools.insert({name: this.state.school, class: [this.state.class]})
    // }

    

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
    let school = Schools.findOne({name: value});
    obj[property] = value;
    if(school && school.classes) {
      obj['classes'] = school.classes;
    }
    this.setState(obj);
  }

  render () {
    console.log(this.state.school);
    let schoolOptions = this.state.schools.map((school) => {
      return {
        text: school.name,
        value: school.name
      }
    });
    let classOptions = this.state.classes.map((clas) => {
      return {
        text: clas.name,
        value: clas.name
      }
    });

    return (
    
      <Form>  
        <Form.Group>
          <Form.Field required width={8}>
            <label>School</label>
            <Dropdown 
              search
              selection
              placeholder='Choose a school'
              options={schoolOptions}
              value={this.state.school}
              onAddItem={this.onAddSchool}
              onChange={(event, props) => this.handleChange('school', props.value)} />
          </Form.Field>
          <Form.Field required width={8}>
            <label>Class</label>
            <Dropdown
              search
              selection
              placeholder='Choose a class'
              options={classOptions}
              value={this.state.clas}
              onAddItem={this.onAddClass}
              onChange={(event, props) => this.handleChange('class', props.value)} />
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

  let schools = Schools.find().fetch();
  let classes = []
  if(!schools) {
    schools = [];
  }
  return {schools, classes};
}, AddPost);

export default AddPostContainer;
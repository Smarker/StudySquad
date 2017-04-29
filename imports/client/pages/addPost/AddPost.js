'use strict'
import React from 'react';
import { Form, Button, Dropdown, Message, Dimmer, Loader, Table, Icon, Input, Header } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import { createContainer } from 'meteor/react-meteor-data';
import { Random } from 'meteor/random'
import Schools from '/collections/SchoolSchema';
import Posts from '/collections/PostSchema';

class AddPost extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      schools: props.schools,
      classes: props.classes,
      school: '',
      class: '',
      title: '',
      description: '',
      documents: [],
      loading: false,
      alert: {alertVisible: false, message: null}
    }
    this.onAddSchool = this.onAddSchool.bind(this);
    this.onAddClass = this.onAddClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.removeCell = this.removeCell.bind(this);

  }

  componentWillReceiveProps(nextProps) {

    if(this.props != nextProps) {
      this.state = {
        schools: nextProps.schools,
        classes: nextProps.classes,
        school: '',
        class: '',
        title: '',
        description: '',
        documents: [],
        alert: {alertVisible: false, message: null}
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

    if(!this.state.school || !this.state.class || !this.state.title || !this.state.description) {
      console.log("sup");
      this.setState({alert: {alertVisible: true, message: 'All required fields must be filled in'}});
    }  else if(this.state.documents.length == 0){
      this.setState({alert: {alertVisible: true, message: 'Please upload at least one document'}});
    }
    else {
      
      if(Meteor.user()) {
        Posts.insert({title: this.state.title, description: this.state.description, likes: 0, attachmentNumber: 0, school: this.state.school, class: this.state.class, createdDate: new Date(), createdBy: Meteor.user().username, documents:this.state.documents, comments: []});
        this.setState({title: '', class: '', description: '', school: '', clas: '', alert: {alertVisible: true, message: 'Saved Successfully'}});
      } else {
        this.setState({alert: {alertVisible: true, message: 'You have to be logged in before you submit a post.'}});
      }

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
    let school = Schools.findOne({name: value});
    obj[property] = value;
    if(school && school.classes) {
      obj['classes'] = school.classes;
    }
    obj['alert'] = {
      alertVisible: false, message: null
    }
    this.setState(obj);
  }

  handleDismiss (event) {
    this.setState({alert: {alertVisible: false, message: null}});
  }

  onFileChange(event) {
    let file = event.target.files[0];
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    this.setState({loading: true});
    fileReader.onload = (function(theFile, currentState){
    var fileName = theFile.name;
    return function(e){
      base64 = e.target.result;
      let array = currentState.state.documents.slice();
      array.push({
        name: fileName,
        base64: base64
      })  
      currentState.setState({loading: false, documents: array});
      document.getElementById('uploadPDF').value = '';
    };
    })(file, this);   
    // Convert data to base64
    fileReader.readAsDataURL(file);
  }

  removeCell(event) {
    event.preventDefault();
    let documentsArray = this.state.documents.slice(0);

    for(let i = 0; i < documentsArray.length; i++) {
      if(documentsArray[i].name == event.currentTarget.value) {
        documentsArray.splice(i, 1);
        break;
      }
    }
    this.setState({documents: documentsArray});
  }

  render () {
    
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

    let documentTable = this.state.documents.map((document) => {
      return <Table.Row key={document.name}>
                <Table.Cell> <Button icon value={document.name} onClick={this.removeCell}> <Icon name='delete' /></Button></Table.Cell>
                <Table.Cell>{document.name}</Table.Cell>
              </Table.Row> 
    });

    return (
    
      <Form onSubmit={this.submit}>  
        <Header as='h3' dividing>
          Add a post
        </Header>
        {this.state.loading &&
        <Dimmer active inverted>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>}
        {this.state.alert.alertVisible &&
        <Message
          onDismiss={this.handleDismiss}
          header={this.state.alert.message}
        />
        }
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
       
        <Form.Group>
          <Form.Field width={16}>
            <label>Load pdf: </label>&nbsp;
            <Input
              type="file" id='uploadPDF'
              onChange={this.onFileChange}
            />
          </Form.Field>

        </Form.Group>
        
        <Form.Group>
        <Table size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={12}>Delete</Table.HeaderCell>
              <Table.HeaderCell width={14}>Name</Table.HeaderCell>
              </Table.Row>
              </Table.Header>
              <Table.Body>
                {documentTable}
                </Table.Body>
            
        </Table>
        </Form.Group>

         <Button type='submit' primary floated='right'>Submit</Button>
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
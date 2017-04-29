'use strict'
import { Meteor } from 'meteor/meteor'
import React from 'react';
import { render } from 'react-dom';
import Routes from '/imports/client/core/Routes';
import { Dropdown, Button, Grid, Form } from 'semantic-ui-react';
import PostItem from '../../core/reusableComponents/PostItem';
import '../../../../client/customStyles/Home';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      subject: '',
      searchHeaderHeight: $(window).innerHeight()*0.4
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property, value) {
    let obj = {};

    obj[property] = value;

    this.setState(obj);
  }

  handleSubmit(event) {
    alert("Selected " + this.state.school
      + " and " + this.state.subject);
    event.preventDefault();
  }

  updateHeight() {
    this.setState({searchHeaderHeight: $(window).innerHeight()*0.4});
  }

  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateHeight());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight());
  }

  render() {
    const schoolOptions = [
      {
        key: "TCNJ",
        value: "TCNJ",
        text: "TCNJ"
      },
      {
        key: "Rutgers",
        value: "Rutgers",
        text: "Rutgers"
      },
      {
        key: "Princeton",
        value: "Princeton",
        text: "Princeton"
      },
      {
        key: "MIT",
        value: "MIT",
        text: "MIT"
      }
    ];
    const subjectOptions = [
      {
        key: "Computer Science",
        value: "Computer Science",
        text: "Computer Science"
      },
      {
        key: "Mathematics",
        value: "Mathematics",
        text: "Mathematics"
      },
      {
        key: "Organic Chemisty",
        value: "Organic Chemisty",
        text: "Organic Chemisty"
      },
      {
        key: "Astronomy",
        value: "Astronomy",
        text: "Astronomy"
      }
    ];
    return (
      <Grid columns={1} relaxed verticalAlign='middle' centered>
        <Grid.Column className='searchHeader'
        style={{'height': this.state.searchHeaderHeight+'px'}}>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group widths='equal'>
              <Form.Field>
                <label className='searchHeaderText'>Study At</label>
                <Dropdown placeholder="School"
                  search selection
                  options={schoolOptions}
                  name="school"
                  value={this.state.school}
                  onChange={(event, props) => this.handleChange('school', props.value)}
                />
              </Form.Field>
              <Form.Field>
                <label className='searchHeaderText'>For</label>
                <Dropdown placeholder="Subject"
                  search selection
                  options={subjectOptions}
                  name="subject"
                  value={this.state.subject}
                  onChange={(event, props) => this.handleChange('subject', props.value)}
                />
              </Form.Field>
            </Form.Group>
            <Form.Button>Search</Form.Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <PostItem />
        </Grid.Column>
      </Grid>
    );
  }
}


export default Home;
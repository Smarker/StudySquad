'use strict'
import { Meteor } from 'meteor/meteor'
import React from 'react';
import { render } from 'react-dom';
import Routes from '/imports/client/core/Routes';
import { Dropdown } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      subject: ''
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
    ]
    return (
      <form onSubmit={this.handleSubmit}>
        Study At
        <Dropdown placeholder="School"
          search selection
          options={schoolOptions}
          name="school"
          value={this.state.school}
          onChange={(event, props) => this.handleChange('school', props.value)}
        />
        For
        <Dropdown placeholder="Subject"
          search selection
          options={subjectOptions}
          name="subject"
          value={this.state.subject}
          onChange={(event, props) => this.handleChange('subject', props.value)}
        />
        <label>
          <Button
            type="submit"
            content='Search' />
        </label>
      </form >
    );
  }
}


export default Home;
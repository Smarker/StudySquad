'use strict'
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import { Accounts } from 'meteor/accounts-base';

export default class SignUp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  login (event) {
    event.preventDefault();
    Meteor.logoutOtherClients();
    Meteor.loginWithPassword(this.state.username, this.state.password, function (err, success) {
      console.log(err);
      console.log('success');
    });
  }

  signUp (event) {
    event.preventDefault();
    Accounts.createUser({
      username: this.state.username,
      password: this.state.password
    })
  }

  render () {
    return (  
      <Form>
        <Form.Input
          label='Enter username'
          type='text'
          value={this.state.username}
          onChange={(event) => handleChange(this, 'username', event.target.value) } />
        <Form.Input
          label='Enter Password'
          type='password' 
          value={this.state.password}
          onChange={(event) => handleChange(this, 'password', event.target.value)}/>
        <Button primary fluid onClick={this.login}>Login</Button>
        <Button positive fluid onClick={this.signUp}>Sign up</Button>
      </Form>
    )
  }
}
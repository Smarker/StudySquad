import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react'
import LOGIN_ROUTE from '/imports/client/pages/login/routes';
import ADD_POST_ROUTE from '/imports/client/pages/addPost/routes';
import POST_ROUTE from '/imports/client/pages/post/routes';
import SEARCH_RESULTS from '/imports/client/pages/searchResults/routes';

export default class NavBar extends Component {

  componentDidMount () {
    this.props.setNavBarHeight(ReactDOM.findDOMNode(this))
  }

  render() {
    return (
      <Menu icon='labeled' fixed='top'>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name='dashboard' size='huge' />
          Get help
        </Menu.Item>
        <Menu.Item as={Link} to={ADD_POST_ROUTE}>
          <Icon name='sticky note outline' size='huge' />
          Add post
        </Menu.Item>
        <Menu.Item as={Link} to={LOGIN_ROUTE}>
          <Icon name='sign in' size='huge' />
          Login
        </Menu.Item>
      </Menu>
    )
  }
}



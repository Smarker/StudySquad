import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import { Menu, Icon, Input, Image } from 'semantic-ui-react'
import LOGIN_ROUTE from '/imports/client/pages/login/routes';
// import SIGN_UP_ROUTE from '/imports/client/pages/signUp/routes';
import ADD_POST_ROUTE from '/imports/client/pages/addPost/routes';
import POST_ROUTE from '/imports/client/pages/post/routes';
import SEARCH_RESULTS from '/imports/client/pages/searchResults/routes';
import '../../../client/customStyles/Nav';
import '/client/customStyles/General';

class NavBar extends React.Component {
  componentDidMount () {
    this.props.setNavBarHeight(ReactDOM.findDOMNode(this))
  }

  render() {

    let user = (
      <div>
        <Icon name='sign in' size='big' />
        Login
      </div>
    )

    return (
      <Menu icon='labeled' fixed='top' className='nav-style'>
        <Menu.Item as={Link} to='/'>
          <Image src='/orangeSquid.png' size='small' id='logo-style' />
        </Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name='help circle' size='huge' />
          Get help
        </Menu.Item>
        <Menu.Item as={Link} to={ADD_POST_ROUTE}>
          <Icon name='sticky note outline' size='huge' />
          Add post
        </Menu.Item>
        <Menu.Item position='right' as={Link} to={LOGIN_ROUTE} style={{flexDirection: 'row'}}>
          {this.props.user ? 
          <div>
            {this.props.user.username}
            <Icon name='star' size='big' /> {this.props.user.profile.rep}
          </div>

          : user}
           
        </Menu.Item>
      </Menu>
    )
  }
}


export default NavBarContainer = createContainer((props) => {
  let user = Meteor.user();
  return {user};
}, NavBar);



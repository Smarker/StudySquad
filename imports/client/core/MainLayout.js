import React from 'react';
import { Grid, Container, Dropdown } from 'semantic-ui-react';
import NavBar from './NavBar';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarHeight: 0
    }
    this.setNavBarHeight = this.setNavBarHeight.bind(this);
  }

  setNavBarHeight (node) {
    if (node && node.clientHeight) {
      this.setState({navBarHeight: node.clientHeight})
    }
  }

  render () {
    return (
    <Grid columns={1}>
      <Grid.Column>
        <NavBar setNavBarHeight={this.setNavBarHeight} />
      </Grid.Column>
      <Grid.Column style={{paddingTop: this.state.navBarHeight}}>
        {this.props.children}
      </Grid.Column>
    </Grid>
    )

  }

}


export default MainLayout;
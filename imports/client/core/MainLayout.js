import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navSearch: this.props.navBarSearch,
      navBarHeight: 0
    }
    this.setNavBarHeight = this.setNavBarHeight.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        navSearch: nextProps.navBarSearch
      });
    }
  }


  search(text) {
     Meteor.call('search', text, (err, res) => {
       this.setState({
         navSearch: res
       });
     });
  }

  setNavBarHeight (node) {
    if (node && node.clientHeight) {
      this.setState({navBarHeight: node.clientHeight})
    }
  }

  render () { 
    console.log(this.state.navSearch);
    return (
      <Grid columns={1}>
        <Grid.Column>
          <NavBar setNavBarHeight={this.setNavBarHeight} search={this.search} />
        </Grid.Column>
        <Grid.Column style={{paddingTop: this.state.navBarHeight, paddingLeft: '2em', paddingRight: '2em'}}>
          {React.cloneElement(this.props.children, {navSearch: this.state.navSearch})}
        </Grid.Column>
      </Grid>
    )
  }
}


function mapStateToProps({navBarSearch}) {
  console.log(navBarSearch);
  return {
    navBarSearch
  }
}

export default connect(mapStateToProps, null)(MainLayout)
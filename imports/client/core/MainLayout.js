import React from 'react';
import { Grid, Container, Dropdown } from 'semantic-ui-react';

class MainLayout extends React.Component {

  render () {
    return (
    <Grid columns={1}>
      <Grid.Column>
        navbar
      </Grid.Column>
      <Grid.Column>
        {this.props.children}
      </Grid.Column>
    </Grid>
    )

  }

}


export default MainLayout;
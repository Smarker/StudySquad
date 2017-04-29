import React from 'react';
import { Grid, Container, Dropdown } from 'semantic-ui-react';

class MainLayout extends React.Component {

  return () {
    <Grid columns={1}>
      <Grid.Column>
        navbar
      </Grid.Column>
      <Grid.Column>
        {this.props.children}
      </Grid.Column>
    </Grid>
  }

}
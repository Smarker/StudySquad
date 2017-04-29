import React from 'react';
import { Grid, Card, Icon, Image, Item } from 'semantic-ui-react'

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card fluid>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={2} verticalAlign='middle' textAlign='center'>
              <Icon name='thumbs up' size='large' /> 3
              <Icon name='attach' size='large' /> 4
            </Grid.Column>
            <Grid.Column width={4}>
              <Card.Header>
                Dummy Title
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  4/28/17
                </span>
              </Card.Meta>
              tags here
            </Grid.Column>
            <Grid.Column width={8} verticalAlign='middle'>
              <Card.Description>
                Dummy Description
              </Card.Description>
            </Grid.Column>
            <Grid.Column width={2}>
              <Item>
                <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                <Item.Content verticalAlign='middle'>username</Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}
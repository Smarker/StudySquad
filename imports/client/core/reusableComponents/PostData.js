import React from 'react';
import { Grid, Card, Icon, Image, Item, Label } from 'semantic-ui-react';
import '../../../../client/customStyles/Post';
import '../../../../client/customStyles/General';

export default class PostData extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
       <Grid stackable padded>
          <Grid.Row className='post-style'>
            <Grid.Column width={4} verticalAlign='middle'>
              <Icon id='thumb' name='thumbs up' size='large' /> 3
              <Icon id='clip' name='attach' size='large' /> 4
              <Card.Meta>
                <span className='date'>
                  4/28/17
                </span>
              </Card.Meta>
              <Label tag>Rutgers</Label>
              <Label tag>CS111</Label>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign='middle' className='title-desc'>
              <Card.Header as='h1' id='title'>
                Dummy Title
              </Card.Header>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign='middle'>
              <Card.Description id='description' className='title-desc'>
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
    )
  }
}
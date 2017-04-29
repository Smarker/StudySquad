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
              <Icon id='thumb' name='thumbs up' size='large' /> {this.props.post.likes}
              <Icon id='clip' name='attach' size='large' /> {this.props.post.attachmentNumber}
              <Card.Meta>
                <span className='date'>
                  {this.props.post.createdDate}
                </span>
              </Card.Meta>
              <Label tag>{this.props.post.school}</Label>
              <Label tag>{this.props.post.class}</Label>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign='middle' className='title-desc'>
              <Card.Header as='h1' id='title'>
                {this.props.post.title}
              </Card.Header>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign='middle'>
              <Card.Description id='description' className='title-desc'>
                {this.props.post.description}
              </Card.Description>
            </Grid.Column>
            <Grid.Column width={2}>
              <Item>
                <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                <Item.Content verticalAlign='middle'>{this.props.post.createdBy}</Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

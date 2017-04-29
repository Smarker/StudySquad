import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Card, Icon, Image, Item, Label } from 'semantic-ui-react';
import { getFormattedDate } from '/imports/client/core/utils/dateFormatter';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let post = this.props.post;

    return (
      <Grid stackable>
        <Grid.Column width={2} verticalAlign='middle' textAlign='left'>
          <Icon name='thumbs up' size='large' /> {post.likes}
          <p>Like</p>
        </Grid.Column>
        <Grid.Column width={10}>
          <div>
            {post.title}
          </div>
          <div>
           {getFormattedDate(post.createdDate) + ' ' + post.school + ' ' + post.class}
          </div>
        </Grid.Column>
        <Grid.Column textAlign='right' width={4}>
          <Item>
            <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
            <Item.Content verticalAlign='middle'>{post.createdBy}</Item.Content>
          </Item>
        </Grid.Column>
        <Grid.Column width={16}>
          {post.description}
        </Grid.Column>
      </Grid>
    )
  }
}

export default PostDetail;
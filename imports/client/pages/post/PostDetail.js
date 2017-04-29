import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Grid, Card, Icon, Image, Item, Label } from 'semantic-ui-react';
import { getFormattedDate } from '/imports/client/core/utils/dateFormatter';

import Posts from '/collections/PostSchema';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    let index = this.props.post.likes.indexOf(this.props.user.username);
    if(index < 0) { //user didn't like the post yet
      // this.props.post.likes.push(Meteor.user().username);
      // this.props.post.likeCount++;
      let users = [...this.props.post.likes];
      users.push(this.props.user.username);
      Posts.update({_id: this.props.post._id}, {$set: {likes: users, likeCount: this.props.post.likeCount+1}})
      Meteor.users.update({_id: this.props.poster._id}, {$set: {'profile.rep': this.props.user.profile.rep + 1}})
    } else {
      let users = [...this.props.post.likes];
      users.splice(index, 1); //remove one post at index index
      Posts.update({_id: this.props.post._id}, {$set: {likes: users, likeCount: this.props.post.likeCount-1}})
      Meteor.users.update({_id: this.props.poster._id}, {$set: {'profile.rep': this.props.user.profile.rep - 1}})
    }
  }

  render () {
    let rep;
    if (this.props.poster.profile.rep) {
      rep = (
        <div>
          <Icon name='star' size='big' /> {this.props.poster.profile.rep}
        </div>
      )
    }

    let post = this.props.post;

    return (
      <Grid stackable>
        <Grid.Column width={2} verticalAlign='middle' textAlign='left'>
          <Icon name='thumbs up' size='large' onClick={this.toggleLike} /> {post.likeCount}
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
            <Item.Content verticalAlign='middle'>
              {post.createdBy}
              {rep}
            </Item.Content>
          </Item>
        </Grid.Column>
        <Grid.Column width={16}>
          {post.description}
        </Grid.Column>
      </Grid>
    )
  }
}


export default PostDetailContainer = createContainer((props) => {

  let poster = Meteor.users.findOne({username: props.post.createdBy});
  let user = Meteor.user();
  return {user, poster};
}, PostDetail);
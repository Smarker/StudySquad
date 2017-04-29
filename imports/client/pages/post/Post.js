'use strict'
import React from 'react';
import { Grid, Header, Divider, Comment, Form, Button } from 'semantic-ui-react'
import { createContainer } from 'meteor/react-meteor-data';
import { getFormattedDate } from '/imports/client/core/utils/dateFormatter';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import Schools from '/collections/SchoolSchema';
import PostDetail from './PostDetail';
import Posts from '/collections/PostSchema';

  class Post extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        comment: ''
      }
      this.addComment = this.addComment.bind(this);
    }

    addComment () {

    }

    render () {

      let comments = this.props.post.comments.map((comment, index) => {
        return (
          <Comment key={index}>
            <Comment.Avatar src='sup' />
            <Comment.Content>
              <Comment.Author>{comment.username}</Comment.Author>
              <Comment.Metadata>
                <div>{getFormattedDate(comment.createdDate)}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.comment}</Comment.Text>
            </Comment.Content>
          </Comment>
        )
      });
      
      return (
        <div>
          <PostDetail post={this.props.post} />
          <p>
            FILES HERE
          </p>
          <Header dividing size='large'>
            Comments
          </Header>
          <Comment.Group>
            {comments}
            <Form reply onSubmit={this.addComment}>
              <Form.TextArea 
                value={this.state.comment}
                onChange={(event) => handleChange(this, 'comment', event.target.value) } />
              <Button content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment.Group>
        </div>
      )
    }
}


let PostContainer = createContainer((props) => {
  // return {post: Posts.findOne({_id: props.params.postId})}

  return {
    post: {
      title: 'yo',
      description: 'fjdasl;kfjdlksafjdslkajfldsajfkljdsflkdsajfkldsjafljdsfajhsdkjafhdsahfdsafdsahfjdsajfdsahfjkdsahfjdsajfdsaffjdsalkfjdsaklfjdsalkfjdsalkfdsajfkdsajfdklsfjdklasjfdkslfjdsalk',
      likes: 5,
      comments: [
        {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
        {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
        {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
        {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
        {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
      ],
      createdBy: 'svuong',
      createdDate: new Date(),
      school: 'Rutgers',
      class: 'Calculus'
    }
  }

}, Post)

export default PostContainer;
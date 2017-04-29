'use strict'
import React from 'react';
import { Grid, Header, Divider, Comment, Form, Button, Container, List, Dimmer, Loader } from 'semantic-ui-react'
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
        comment: '',
      }
      this.addComment = this.addComment.bind(this);
    }
    addComment (event) {
      event.preventDefault();
      let post = Posts.findOne({_id: this.props.post._id});
      let comments = post.comments;
      comments.push({
        username: Meteor.user().username,
        comment: this.state.comment,
        createdDate: new Date()
      })
     
      Posts.update({_id: post._id}, {$set: {comments: comments}});
      this.setState({comment: ''});
    }

    render () {
      let loading = true;
      if(this.props.post) {
      loading = false;
      console.log(this.props.post);
      let comments = this.props.post.comments.map((comment, index) => {
        return (
          <Comment key={index}>
            <Comment.Avatar src='/matt.jpg' />
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
    
      let documents = [];
  
      if (this.props.post.documents) {
        documents = this.props.post.documents.map((document) => {
      return (     <div key={document.name}>
        
    <List.Item href={document.base64} target="_blank">{document.name}</List.Item>
    </div>)
        })
      }
      
      return (
        <div>
          <PostDetail post={this.props.post} />
          <List bulleted>
            {documents}
          </List>
          <Header dividing size='large'>
            {'Comments ' + '(' + this.props.post.comments.length + ')'}  
          </Header>
          <Container text>
            <Comment.Group>
              {comments}
              <Form reply onSubmit={this.addComment}>
                <Form.TextArea 
                  value={this.state.comment}
                  onChange={(event) => handleChange(this, 'comment', event.target.value) } />
                <Button content='Add Comment' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Container>
          
        </div>
      )
    }
  return (
    <div>
     {loading &&
        <Dimmer active inverted>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>}
    </div>
  )
}
}


let PostContainer = createContainer((props) => {
 return {post: Posts.findOne({_id: props.params.postId})}

  // return {
  //   post: {
  //     title: 'yo',
  //     description: 'fjdklas fjdsa jfdksla jfdlksa jfdklsa fjdklsa fjdlkafj dlsakfjdl fjad alsf jlkdsaf jlkd sjaflksdaf jdklsa fjdklsajf kdljfdk d djdkfjdks ajfkd sajfk dsajkfd jsakfd jsaklfjdlks ajfdk lsa kdl asjflk dsa jfdlksa jfkldsa jfkdsllaj kl jklj klj lk jlkj lkjlkj lkjlk  jlkj lk jkljkl jkl jlkjlkjlkjklj lkj ',
  //     likes: 5,
  //     comments: [
  //       {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
  //       {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
  //       {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
  //       {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
  //       {username: 'bob', comment: 'fjdlkasjfkldsajfldkasfda', createdDate: new Date()},
  //     ],
  //     createdBy: 'svuong',
  //     createdDate: new Date(),
  //     school: 'Rutgers',
  //     class: 'Calculus'
  //   }
  // }

}, Post)

export default PostContainer;
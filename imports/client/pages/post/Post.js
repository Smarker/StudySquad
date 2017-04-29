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
      this.onClick = this.onClick.bind(this);
    }

    addComment () {

    }

    onClick (event) {
      console.log(event);
      let pdf = event.currentTarget;
      console.log(pdf);
      //.replace('data:application/pdf;base64', 'data:application/octet-stream;base64');;
      
      // var dlnk = document.getElementById('dwnldLnk');
      // dlnk.href = pdf;
      window.location.replace(pdf.value);
      dlnk.click();
    }

    render () {
      let loading = true;
      if(this.props.post) {
      loading = false;
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
    

      let documents = [];

      
      if (this.props.post.documents) {
        documents = this.props.post.documents.map((document) => {
          // let newDocumentURL = document.base64.replace('data:application/pdf;base64', 'data:application/octet-stream;base64');
          // console.log(newDocumentURL);
          //return <a href={document.base64} key={document.name}>{document.name}</a>;
      return (     <div key={document.name}>
        
    
    <a href={document.base64} value={document.base64} title='o ficheirinho de tostas.pdf'>clica aqui oh sashavore</a>
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
            Comments
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
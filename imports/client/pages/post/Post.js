'use strict'
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Schools from '/collections/SchoolSchema';
import PostData from '../../core/reusableComponents/PostData';
import Posts from '/collections/PostSchema';

 class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postID: props.location.pathname.split('/')};
  }

  render () {
    return (
    <div>
       <PostData />
    </div>
    )
  }
}


let PostContainer = createContainer((props) => {
  /*
    find files
    find comments
    find title
    find description
  */
  let postID = props.location.pathname.split('/');

  console.log(Posts.find().fetch());

  return {files: 'Sup', comments: 'SUp'}
}, Post)

export default PostContainer;
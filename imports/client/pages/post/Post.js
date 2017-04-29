'use strict'
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Universities from '../../../collections/UniversitySchema';
import PostData from '../../core/reusableComponents/PostData';
import PDFDisplay from '../../core/reusableComponents/PDFDisplay';
import Posts from '../../../collections/PostSchema';

 class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postID: props.location.pathname.split('/')};

    this.onClickPDF = this.onClickPDF.bind(this);
  }

  onClickPDF(event) {
    console.log("SUP");
  }

  render () {
    return (
    <div>
       <PostData />
       <PDFDisplay />
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
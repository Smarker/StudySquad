'use strict'
import React from 'react';
import { Header } from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import PostItem from '../../core/reusableComponents/PostItem';

import Posts from '/collections/PostSchema';

function SearchResults (props) {
  console.log(props.searchResults);
  const PostList = props.searchResults.map((post) => {
    return <PostItem post={post} key={post._id} />;
  });

  return (
    <div>
      <Header as='h2'>{props.schoolName} {props.className}</Header>
      {PostList}
    </div>
  );
}

let SearchResultsContainer = createContainer((props) => {
  console.log(props);
  return {
    schoolName: props.params.schoolName,
    className: props.params.className, 
    searchResults: Posts.find({school: props.params.schoolName, class: props.params.className}).fetch()
  }
}, SearchResults);

export default SearchResultsContainer;


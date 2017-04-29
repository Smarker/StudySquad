'use strict'
import React from 'react';
import { Header } from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import PostItem from '../../core/reusableComponents/PostItem';

import Posts from '/collections/PostSchema';

function SearchResults (props) {
  return (
    <div>
      <Header as='h2'>Rutgers Computer Science</Header>
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

let SearchResultsContainer = createContainer((props) => {
  return {
    searchResults: Posts.find({school: props.params.schoolName, class: props.params.className}).fetch()
  }
}, SearchResults);

export default SearchResultsContainer;


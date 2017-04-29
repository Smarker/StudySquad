'use strict'
import React from 'react';
import { Header, Grid, Divider, Dropdown} from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import PostItem from '../../core/reusableComponents/PostItem';

import Posts from '/collections/PostSchema';

function SearchResults (props) {
  console.log(props.searchResults);
  const PostList = props.searchResults.map((post) => {
    return <PostItem post={post} key={post._id} />;
  });

  let sortOptions = [
    {text: 'Date: Newest to oldest', value: 'newest'},
    {text: 'Date: Oldest to to newest', value: 'oldest'},
    {text: 'Likes: most to least', value: 'likes'},
    {text: 'Name', value: 'name'},

  ]

  return (
    <Grid columns={1}>
      <Grid.Column width={3}>
        <Header as='h3'>
          {props.schoolName}, {props.className}
        </Header>
      </Grid.Column>
      <Grid.Column width={3} floated='right'>
        <Dropdown
          inline
          value={'newest'}
          options={sortOptions} />
      </Grid.Column>
      <Grid.Column width={16} style={{paddingBottom: 0, paddingTop: 0}}>
        <Divider style={{paddingTop: 0, paddingBottom: 0, marginBottom: 0, marginTop: 0}} />
      </Grid.Column>
      <Grid.Column width={16}>
        {PostList}
      </Grid.Column>
    </Grid>
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
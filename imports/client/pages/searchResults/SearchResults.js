'use strict'
import React from 'react';
import { Header, Grid, Divider, Dropdown} from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import PostItem from '../../core/reusableComponents/PostItem';
import { handleChange } from '/imports/client/core/utils/formHelpers';
import NavSearchResults from '/imports/client/core/reusableComponents/NavSearchResults'

import Posts from '/collections/PostSchema';

class SearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sort: 'newest',
      searchResults: this.props.searchResults
    }
    this.sort = this.sort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        searchResults: nextProps.searchResults
      });
    }
  }

  sort (sortValue) {
    let options = {sort: {}};
    if (sortValue === 'newest') {
      options.sort.createdDate = -1;
    } else if (sortValue === 'oldest') {
      options.sort.createdDate = 1;
    } else if (sortValue === 'likes') {
      options.sort.likeCount = 1;
    }

    this.setState({
      sort: sortValue,
      searchResults: Posts.find({school: this.props.params.schoolName, class: this.props.params.className}, options).fetch()
    })
  }


  render () {

    if (this.props.navSearch.length > 0) {
      return <NavSearchResults posts={this.props.navSearch} />
    }





    const PostList = this.state.searchResults.map((post) => {
      return <PostItem post={post} key={post._id} />;
    });

    let sortOptions = [
      {text: 'Newest to oldest', value: 'newest'},
      {text: 'Oldest to to newest', value: 'oldest'},
      {text: 'Most popular', value: 'likes'}
    ];

    return (
      <Grid columns={1}>
        <Grid.Column width={3}>
          <Header as='h3'>
            {this.props.schoolName}, {this.props.className}
          </Header>
        </Grid.Column>
        <Grid.Column width={3} floated='right'>
          <Dropdown
            inline
            value={this.state.sort}
            options={sortOptions} 
            onChange={(event, props) => this.sort(props.value) } />
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
}

let SearchResultsContainer = createContainer((props) => {
     let options = {sort: {}};
      options.sort.createdDate = -1;
  return {
    schoolName: props.params.schoolName,
    className: props.params.className, 
    searchResults: Posts.find({school: props.params.schoolName, class: props.params.className}, options).fetch()
  }
}, SearchResults);

export default SearchResultsContainer;
'use strict'
import React from 'react';
import { Header, Grid, Divider, Dropdown} from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import PostItem from '../../core/reusableComponents/PostItem';
import { handleChange } from '/imports/client/core/utils/formHelpers';

import Posts from '/collections/PostSchema';

class NavSearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sort: 'newest',
      navSearchResults: props.posts
    }
    this.sort = this.sort.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        navSearchResults: nextProps.navSearchResults
      });
    }
  }

  sort (sortValue) {
    let options = {sort: {}};
    if (sortValue === 'newest') {
      options.sort.createdDate = 1;
    } else if (sortValue === 'oldest') {
      options.sort.createdDate = -1;
    } else if (sortValue === 'likes') {
      options.sort.likeCount = 1;
    }

    this.setState({
      sort: sortValue,
      navSearchResults: Posts.find({school: this.props.params.schoolName, class: this.props.params.className}, options).fetch()
    })
  }


  render () {

    const PostList = this.state.navSearchResults.map((post) => {
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
            {PostList.length + ' Posts found'} 
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

let NavSearchResultsContainer = createContainer((props) => {
  return {
    
  }
}, NavSearchResults);

export default NavSearchResultsContainer;
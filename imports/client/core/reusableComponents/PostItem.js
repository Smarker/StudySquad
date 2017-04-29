import React from 'react';
import { Card } from 'semantic-ui-react';
import PostData from './PostData';
import { Link } from 'react-router';

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card fluid as={Link} to={"/post/" + this.props.post._id}>
        <PostData post={this.props.post} />
      </Card>
    );
  }
}
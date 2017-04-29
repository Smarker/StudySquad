'use strict'
import React from 'react';
import { Header } from 'semantic-ui-react'
import PostItem from '../../core/reusableComponents/PostItem';

export default function SearchResults (props) {
  return (
    <div>
      <Header as='h2'>Rutgers Computer Science</Header>
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}
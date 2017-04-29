'use strict'
import { Meteor } from 'meteor/meteor'
import React from 'react';
import { render } from 'react-dom';
import Routes from '/imports/client/core/Routes';
import { Header, Dropdown, Button, Grid, Form } from 'semantic-ui-react';
import '../../../../client/customStyles/Home';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import NavSearchResults from '/imports/client/core/reusableComponents/NavSearchResults'
import PostItem from '../../core/reusableComponents/PostItem';
import Posts from '/collections/PostSchema';

import Schools from '/collections/SchoolSchema';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.posts,
      school: '', //selected school from dropdown
      subject: '', //selected subject from dropdown
      schools: props.schools, //from mongo
      schoolOptions: props.schoolOptions, //from mongo
      classOptions: [{
        key: "",
        value: "",
        text: ""
      }], //from mongo
      searchHeaderHeight: $(window).innerHeight() * 0.4
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.state = {
        posts: nextProps.posts,
        schools: nextProps.schools,
        schoolOptions: nextProps.schoolOptions
      }
    }
  }

  //http://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  handleChange(property, value) {
    let obj = {};

    obj[property] = value;

    this.setState(obj);
    if ('school' === property) {
      let s = this.state.schools.find(school => school.name === value); //single school we found

      let classes = s.classes;
      let classOpt = [];

      classes.map((c) => (
        classOpt.push({
          key: c.name,
          value: c.name,
          text: c.name
        }))
      );

      this.state.classOptions = classOpt;
    }
  }

  handleSubmit(event) {
    browserHistory.push('/search/' + this.state.school + '/' + this.state.subject);
    event.preventDefault();
  }

  updateHeight() {
    this.setState({ searchHeaderHeight: $(window).innerHeight() * 0.4 });
  }

  componentWillMount() {
    this.updateHeight();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateHeight());
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHeight());
  }

  render() {
    if (this.props.navSearch.length > 0) {
      return <NavSearchResults posts={this.props.navSearch} />
    }



    const PostList = this.props.posts.map((post) => {
      return <PostItem post={post} key={post._id} />;
    });




    return (
      <Grid columns={1}>
        <Grid.Column className='searchHeader'
          style={{ 'height': this.state.searchHeaderHeight + 'px' }}>


          <Grid style={{ height: '100%', margin: 0 }}>
            <Grid.Column verticalAlign='middle'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Field width={2} />
                  <Form.Field width={4}>
                    <label className='searchHeaderText'>Study At</label>
                    <Dropdown
                      placeholder="School"
                      search selection
                      options={this.state.schoolOptions}
                      name="school"
                      value={this.state.school}
                      onChange={(event, props) => this.handleChange('school', props.value)}
                    />
                  </Form.Field>
                  <Form.Field width={4}>
                    <label className='searchHeaderText'>For</label>
                    <Dropdown placeholder="Subject"
                      search selection
                      options={this.state.classOptions}
                      name="subject"
                      value={this.state.subject}
                      onChange={(event, props) => this.handleChange('subject', props.value)}
                    />
                  </Form.Field>
                  <Form.Field width={4}>
                    <label style={{ visibility: 'hidden' }}>something</label>
                    <Form.Button primary style={{ paddingLeft: '2em' }}>Search</Form.Button>
                  </Form.Field>
                  <Form.Field width={2} />

                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Header as='h3' dividing>
            Recent Posts
          </Header>
          {PostList}
        </Grid.Column>
      </Grid>
    );
  }
}


let HomeContainer = createContainer((props) => {
  let schools = Schools.find({}).fetch();

  let posts = Posts.find({}, {sort: {createdDate: 1}, limit: 5}).fetch();


  const schoolOptions = [];

  schools.map((school) => (
    schoolOptions.push({
      key: school._id,
      value: school.name,
      text: school.name
    }))
  );

  return {
    posts,
    schools: schools,
    schoolOptions: schoolOptions
  }
}, Home);

export default HomeContainer;
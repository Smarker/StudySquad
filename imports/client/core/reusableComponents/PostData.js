import React from 'react';
import { Grid, Card, Icon, Image, Item, Label } from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';
import '../../../../client/customStyles/Post';
import '../../../../client/customStyles/General';
import { getFormattedDate } from '/imports/client/core/utils/dateFormatter';

class PostData extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    let rep;

    if (this.props.user) {
      rep = (
        <div>
          <Icon name='star' size='big' /> {this.props.user.profile.rep}
        </div>
      )
    }


    return (
       <Grid stackable padded style={{color: '#1B1C1D'}}>
          <Grid.Row className='post-style'>
            <Grid.Column width={4} verticalAlign='middle'>
              <Icon id='thumb' name='thumbs up' size='large' /> {this.props.post.likeCount}
              <Icon id='clip' name='attach' size='large' /> {this.props.post.attachmentNumber}
              <Card.Meta>
                <span className='date'>
                  {getFormattedDate(this.props.post.createdDate)}
                </span>
              </Card.Meta>
              <Label tag>{this.props.post.school}</Label>
              <Label tag>{this.props.post.class}</Label>
            </Grid.Column>
            <Grid.Column width={4} verticalAlign='middle' className='title-desc' style={{color: '#4183c4'}}>
              <Card.Header as='h1' id='title'>
                {this.props.post.title}
              </Card.Header>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign='middle'>
              <Card.Description id='description' className='title-desc'>
                {this.props.post.description}
              </Card.Description>
            </Grid.Column>
            <Grid.Column width={2} verticalAlign='middle' textAlign='right'>
              <Item>
                <Item.Content>
                  {this.props.post.createdBy}
                  {rep}                  
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}


export default PostDataContainer = createContainer((props) => {
  let user = Meteor.users.findOne({username: props.post.createdBy});
  console.log(user);
  return {user};
}, PostData);
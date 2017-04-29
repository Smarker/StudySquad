import React from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

export default class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Icon name='thumbs up' /> 3
                <Icon name='attach' /> 4
              </Grid.Column>
              <Grid.Column>
                <Card.Header>
                  Dummy Title
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    4/28/17
                  </span>
                </Card.Meta>
              </Grid.Column>
              <Grid.Column>
                <Card.Description>
                  Dummy Description
                </Card.Description>
              </Grid.Column>
              <Grid.Column>
                <Image src='/assets/images/wireframe/image.png' /> Username
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
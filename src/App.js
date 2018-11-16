import React, { Component } from 'react';
import { Query,graphql,compose } from 'react-apollo';
import gql from 'graphql-tag';
import PostItem from "./Postitem";
import Sidebar from './Sidebar';
import { withRouter } from 'react-router-dom'
import LayoutWrapper from './LayoutWrapper';

import {
  Link,
} from 'react-router-dom'
import { Grid, Icon, Item, Loader, Button} from 'semantic-ui-react'
class App extends Component {

  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
     
      if (nextProps.fetchPosts.GetPosts != undefined) {
         this.setState({posts : nextProps.fetchPosts.GetPosts});
      }
     
    }
  }
  render() {
     console.log('state data',this.state);
    return (
      <React.Fragment>
             <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                <Item.Group divided className="wrapper">
                  {this.state && this.state.posts != undefined 
                    ? this.state.posts.length > 0
                      ? this.state.posts.map(post => (
                        <PostItem post={post}/>
                      )) : <div className="nopost"><Icon name="edit"/><p>No post found</p><Button as={Link} to="create" secondary>Add post</Button></div>
                    : 
                    <Loader active inline='centered' />}
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar />
              </Grid.Column>
            </Grid.Row>
      </React.Fragment>
    )
  }


}


const FETCH_POSTS = gql`
  query Posts {
    GetPosts{
      _id
      title
      content
      device
      email
      firstName
      lastName
      country
      state
      city
      zip
      createdAt
      updatedAt
    }
  }`


const FetchPosts = compose(
  
  graphql(FETCH_POSTS, {
    name: 'fetchPosts',
  }),
  
)(App)

export default LayoutWrapper(withRouter(FetchPosts))

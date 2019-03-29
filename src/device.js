import React, { Component } from 'react';
import {graphql,compose } from 'react-apollo';
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
      // if (nextProps.fetchPosts.GetPostByCategory != undefined) {
      //    this.setState({posts : nextProps.fetchPosts.GetPostByCategory});
      // }

      if (nextProps.location && nextProps.location.pathname) {
      const device = nextProps.location.pathname.split('/')[2];
     this.props.fetchPosts.refetch({
      skip: false,
      type:device
    })
    .then(res => {
      if (res.data && res.data.GetPostByCategory != undefined) {
       this.setState({posts : res.data.GetPostByCategory});
      }
    })
    .catch(err => {
      console.log(err);
    })
   }
     
    }
  }
  componentDidMount = () => {
    if (this.props.location && this.props.location.pathname) {
      const device = this.props.location.pathname.split('/')[2];
     this.props.fetchPosts.refetch({
      skip: false,
      type:device
    })
    .then(res => {
       console.log('resposne did mount',res);
    })
    .catch(err => {
      console.log(err);
    })
   }
  }

  fetchPostsByCategory = (type) => {
     this.props.history.push({
       pathname: `/${type}`,
      })
  }

  render() {
    return (
      <React.Fragment>
             <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                <Item.Group divided className="wrapper">
                  {this.state && this.state.posts != undefined 
                    ? this.state.posts.length > 0
                      ? this.state.posts.map(post => (
                        <PostItem post={post}/>
                      )) : <div className="nopost"><Icon name="edit"/><p>No post found</p><Button as={Link} to="/create" secondary>Add post</Button></div>
                    : 
                    <Loader active inline='centered' />}
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar fetchPostsByCategory={this.fetchPostsByCategory} />
              </Grid.Column>
            </Grid.Row>
      </React.Fragment>
    )
  }


}


const FETCH_POSTS = gql`
  query Posts($type:String!,$skip: Boolean!){
    GetPostByCategory(type:$type)@skip(if: $skip){
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
    options: ownProps => ({
      variables: {
        type: ownProps.type,
        skip:true
      },
    }),
  }),
  
)(App)

export default LayoutWrapper(withRouter(FetchPosts))
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
const Device = ({ data: { loading, error, GetPostByCategory }}) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
   <React.Fragment>
             <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                <Item.Group divided className="wrapper">
                  {GetPostByCategory && GetPostByCategory != undefined 
                    ? GetPostByCategory.length > 0
                      ? GetPostByCategory.map((post,index) => (
                        <PostItem key={index} post={post}/>
                      )) : <div className="nopost"><Icon name="edit"/><p>No post found</p><Button as={Link} to="/create" secondary>Add post</Button></div>
                    : 
                    <Loader active inline='centered' />}
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar/>
              </Grid.Column>
            </Grid.Row>
      </React.Fragment>
  );
};

export const FETCH_POSTS = gql`
query Posts($type:String!){
  GetPostByCategory(type:$type){
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
}`;

export default (graphql(FETCH_POSTS, {
  options: props => ({
    variables: { type: props.match.params.type },
  }),
}) (LayoutWrapper(Device)));


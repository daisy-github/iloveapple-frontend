import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PostItem from "./Postitem";
import Sidebar from './Sidebar'
import {
  Link,
} from 'react-router-dom'
import { Grid, Container, Menu, Header, Button, Icon, Image, Item, Label, List } from 'semantic-ui-react'

const QUERY = gql`
  query Posts{
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
  }
`;

const Posts = () => (
      <Query query={QUERY} >
        {({ data, error, loading }) => {
          if (error) return '💩 Oops!';
          if (loading) return <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                <Item.Group divided className="wrapper">
                  <PostItem />
                  <PostItem />
                  <PostItem />
                  <PostItem />
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar />
              </Grid.Column>
            </Grid.Row>;

          return (
            <React.Fragment>
             
              <h2>Posts</h2>
              <ul>
                {data.GetPosts.map(post => (
                  <li key={post.title}>{post.title}<Link to={"/post/"+post._id}>Read More</Link></li>
                ))}
              </ul>
            </React.Fragment>
              
            

          );
        }}
      </Query>
    

      
   
  
);


const App = () => <Posts/>;

export default App;
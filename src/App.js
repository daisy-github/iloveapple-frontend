import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PostItem from "./Postitem";
import Sidebar from './Sidebar'
import {
  Link,
} from 'react-router-dom'
import { Grid, Icon, Item, Loader} from 'semantic-ui-react'

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
          if (error) return <React.Fragment>
             <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar />
              </Grid.Column>
            </Grid.Row>
            </React.Fragment>;
          if (loading) return <Grid.Row>
              <Grid.Column computer={16} mobile={16} tablet={16} style={{padding:'40px 0'}}>
                <Loader active inline='centered' />
            </Grid.Column>
          </Grid.Row>;

          return (
            <React.Fragment>
             <Grid.Row>
              <Grid.Column computer={10} mobile={16} tablet={10}>
                <Item.Group divided className="wrapper">
                  {data.GetPosts.map(post => (
                    <PostItem post={post}/>
                ))}
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Sidebar />
              </Grid.Column>
            </Grid.Row>
            </React.Fragment>
              
            

          );
        }}
      </Query>
    

      
   
  
);


const App = () => <Posts/>;

export default App;
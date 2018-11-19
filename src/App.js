import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React, { Component } from 'react';
import PostItem from "./Postitem";
import Sidebar from './Sidebar'
import {
  Link,
} from 'react-router-dom'
import { Grid, Icon, Item, Loader, List,Header} from 'semantic-ui-react'
import LayoutWrapper from './LayoutWrapper';
class App extends Component {


    render() {
      
     return(
      <Query query={QUERY} variables={{type:"1"}} >
        {({ data, error, loading,refetch }) => {
          if (error) return '💩 Oops!';
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
                  {data.GetPostByCategory.map(post => (
                    <PostItem post={post}/>
                ))}
                </Item.Group>
              </Grid.Column>
              <Grid.Column computer={6} mobile={16} tablet={6}>
                <Grid.Row className="sidebar-right">
                  <Grid.Column className="list_block">
                    <Header as='h3'  content='Categories' />
                    <List>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={()=>{
                  refetch({type:"0"})
                }}>All</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={()=>{
                  refetch({type:"1"})
                }}>iPhone</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={()=>{
                  refetch({type:"2"})
                }}>iPad</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={()=>{
                  refetch({type:"3"})
                }}>MacBook</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={()=>{
                  refetch({type:"4"})
                }}>iMac</Link>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='angle right' />
                <List.Content onClick={()=>{
                  refetch({type:"5"})
                }}>
                  <Link to="">Apple Watch</Link>
                </List.Content>
              </List.Item>
              
            </List>  
                  </Grid.Column> 
                </Grid.Row> 
              </Grid.Column>
            </Grid.Row>
            </React.Fragment>
              
            

          );
        }}
      </Query>
    
  )
}
}
const QUERY = gql`
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
  }
`;

export default LayoutWrapper(App);
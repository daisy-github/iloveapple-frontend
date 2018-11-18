import React,{Component} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PostItem from "./Postitem";
import Sidebar from './Sidebar'
import {
  Link,
} from 'react-router-dom'
import { Grid, Icon, Item, Loader} from 'semantic-ui-react'
import LayoutWrapper from './LayoutWrapper';
class App extends Component {
// fetchPostsByCategory = type => {
//       <Query query={QUERY} variables={{type}} >
//         {({ data, error, loading }) => {
//              this.setState({data:data});
//            }
//           }
//       </Query>
//   }

    render() {
      let type = "1";
     return(
      <Query query={QUERY} variables={{type}} >
        {({ data, error, loading }) => {
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
                <Sidebar fetchPostsByCategory={this.fetchPostsByCategory} />
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
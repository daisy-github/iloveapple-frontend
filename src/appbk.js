import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Link,
} from 'react-router-dom'
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
      if (loading) return 'Patience young grasshopper...';

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
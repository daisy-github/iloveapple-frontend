import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo';
import  { gql } from 'apollo-boost';

class Post extends Component {
  render() {
    let postDetails = (this.state !== null && this.state.postDetails !== null) ? this.state.postDetails : null;
    return (
      <div className="pa4 flex justify-center bg-white">
        <h2>Posts</h2>
          {postDetails != null ? <div>
            <p>{postDetails.title}</p>
            <p>{postDetails.content}</p>
          </div> : "Loading..."}
      </div>
    )
  }

  componentDidMount =  async () => {
    if(this.props.match.params.id !== undefined){
    await this.props.fetchPost.refetch({
      postId:this.props.match.params.id,
      skip:false
    })
    .then(res => {
        if (res.data.GetPostById){
          let data = res.data.GetPostById;
           this.setState({postDetails:data})
         }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
const FETCH_POST_QUERY = gql`
  query fetchPost($postId:String!,$skip:Boolean!) {
    GetPostById(postId: $postId)@skip(if: $skip){
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
`

const FetchPostWithQuery = graphql(FETCH_POST_QUERY, {
    name: "fetchPost",
    options: ownProps => ({
      variables: {
        postId:"",
        skip:true
      },
    }),
  })(Post)

export default withRouter(FetchPostWithQuery)
import React,{Component} from 'react';
import { Grid, Icon, Menu, Table, Button, Header,Loader} from 'semantic-ui-react'
import {graphql,compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter,Link } from 'react-router-dom'
class Post extends Component {



  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
      if (nextProps.fetchPosts.GetRejectedPosts != undefined) {
         this.setState({posts : nextProps.fetchPosts.GetRejectedPosts});
      }
     
    }
  }
  acceptPost = async(id) => {
    console.log('category',id);
    this.setState({ isAttempting: true});
    await this.props.verifyPost({
      id:id,
      status:true,
      reason:""
    })
      .then((res) => {
        if (res.data && res.data) {
          console.log('=====res data===',res.data);
        }
      })
      .catch((err) => {
         console.log('=====res error===',err);
        
      });
      this.setState({ isAttempting: false});
  }

  render(){
  return (

  <Grid.Row className="posts">
	  
	  <Grid.Column computer={12} mobile={16}>
		<Header size='large'>Posts</Header>
			<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Author</Table.HeaderCell>
        <Table.HeaderCell>Created At</Table.HeaderCell>
        <Table.HeaderCell>Email Id</Table.HeaderCell>
        <Table.HeaderCell>Phone no.</Table.HeaderCell>
        <Table.HeaderCell>Content</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
    {this.state && this.state.posts != undefined 
                    ? this.state.posts.length > 0
                      ? this.state.posts.map(post => (
                        <Table.Row>
        <Table.Cell>{post.firstName}</Table.Cell>
        <Table.Cell>{post.device}</Table.Cell>
        <Table.Cell>{post.email}</Table.Cell>
        <Table.Cell>{post.phone}</Table.Cell>
        <Table.Cell>{post.city}</Table.Cell>
        <Table.Cell>{post.content}</Table.Cell>

        <Table.Cell className="actions"><Button positive onClick={()=>this.acceptPost(post._id)}>Accept</Button></Table.Cell>
        
      </Table.Row>
                      )) : <div className="nopost" ><p>No rejected posts found</p></div>
                    : 
                    <Loader active inline='centered' />}
      
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
	  </Grid.Column>	
    </Grid.Row>
    )
  }
}

const FETCH_POSTS = gql`
  query Posts {
    GetRejectedPosts{
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

const VERIFY_POST = gql`
  mutation verifyPost($id:String!,$status:String!,$reason:String!) {
    VerifyPost(id:$id,status:$status,reason:$reason)
  }` 
const FetchPosts = compose(
  graphql(VERIFY_POST, {
    props({ mutate }) {
      return {
        verifyPost(vars) {
          return mutate({
            variables: vars,
          });
        },
      };
    },
 }),
 graphql(FETCH_POSTS, {
    name: 'fetchPosts',
  }),
  
)(Post)

export default (withRouter(FetchPosts))

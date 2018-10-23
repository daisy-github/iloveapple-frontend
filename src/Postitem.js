import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'

class PostItem extends Component {    
  render() {
    
    return (
      <Item className="post_grid">                 
          <Item.Content>
            <Item.Header as={Link} to="/">{this.props.post.title}</Item.Header>
            <Item.Meta>
              <List horizontal>
                <List.Item>
                   <List.Icon name='user' />
                  <List.Content verticalAlign='middle' className="meta_author">{this.props.post.firstName}</List.Content>
                </List.Item>
                <List.Item>
                   <List.Icon name='calendar alternate' />
                  <List.Content verticalAlign='middle'>{this.props.post.createdAt}</List.Content>
                </List.Item>
                <List.Item>
                   <List.Icon name='folder outline' />
                  <List.Content verticalAlign='middle'>{this.props.post.device}</List.Content>
                </List.Item>
                {/*<List.Item>
                   <List.Icon name='comment outline' />
                  <List.Content verticalAlign='middle'>Comments are off for this post</List.Content>
                </List.Item>*/}
              </List>
            </Item.Meta>
            <Item.Description>{this.props.post.content}</Item.Description>
            <Item.Extra>
              <Button primary floated='left' className="custom post_button">
                Read more
                
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item> 
    )
  }
}






export default withRouter(PostItem);
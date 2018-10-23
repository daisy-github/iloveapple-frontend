import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'
import moment from 'moment';
import ReadMoreReact from 'read-more-react';
import ReadMoreAndLess from 'react-read-more-less';
class PostItem extends Component {    
  render() {
    const createdAt = moment(this.props.post.createdAt).format('MMMM DD YYYY');
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
                  <List.Content verticalAlign='middle'>{createdAt}</List.Content>
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
            <Item.Description>
            <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={200}
                readMoreText="Read more"
                readLessText="Read less"
            >
                {this.props.post.content}
            </ReadMoreAndLess>
            </Item.Description>
            {/*<Item.Extra>
                          <Button primary floated='left' className="custom post_button">
                            Read more
                            
                          </Button>
                        </Item.Extra>*/}
          </Item.Content>
        </Item> 
    )
  }
}






export default withRouter(PostItem);
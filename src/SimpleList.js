import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'

class SimpleList extends Component {  
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return (     
            <List>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="">All</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="">iPad</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="">MacBook</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="">iMac</Link>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="">Apple Watch</Link>
                </List.Content>
              </List.Item>
              
            </List>  
       
    )
  }
}






export default withRouter(SimpleList);
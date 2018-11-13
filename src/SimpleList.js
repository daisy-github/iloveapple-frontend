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


  handleCategory = async(type) => {
    console.log(type);
  }

  render() {
    const { activeIndex } = this.state
    return (     
            <List>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={() => this.handleCategory('0')}>All</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={() => this.handleCategory('1')}>iPhone</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={() => this.handleCategory('2')}>iPad</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={() => this.handleCategory('3')}>MacBook</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="" onClick={() => this.handleCategory('4')}>iMac</Link>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='angle right' />
                <List.Content onClick={() => this.handleCategory('5')}>
                  <Link to="">Apple Watch</Link>
                </List.Content>
              </List.Item>
              
            </List>  
       
    )
  }
}






export default withRouter(SimpleList);
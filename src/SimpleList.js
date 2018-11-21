import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import {List } from 'semantic-ui-react'

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
                  <Link to="/">All</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="/device/1">iPhone</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="/device/2">iPad</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="/device/3" >MacBook</Link>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="/device/4">iMac</Link>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='angle right' />
                <List.Content>
                  <Link to="/device/5">Apple Watch</Link>
                </List.Content>
              </List.Item>
              
            </List>  
       
    )
  }
}






export default withRouter(SimpleList);
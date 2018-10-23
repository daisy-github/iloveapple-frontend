import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'

class Sidebar extends Component {  
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
      <Grid.Row className="sidebar">
        <Grid.Column className="list_block">
          <Header as='h3'  content='Categories' />
          <Accordion>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             All
            </Accordion.Title>  
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             
              iPhone
            </Accordion.Title>
            
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             
              iPad
            </Accordion.Title>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             
              iPod Touch
            </Accordion.Title>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             
              MacBook
            </Accordion.Title>  
               <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             
              Mac Mini
            </Accordion.Title> 
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             iMac
            </Accordion.Title>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             Apple TV
            </Accordion.Title>   
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             Apple Watch
            </Accordion.Title>   
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
             Other
            </Accordion.Title> 
                        
          </Accordion>

        </Grid.Column> 

        {/*<Grid.Column className="list_block">
          <Header as='h3'  content='Archive' />
          <Accordion>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='angle right' />
              Semantic UI
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <List>
                <List.Item>                        
                  <List.Content><Link to="/">Semantic UI</Link></List.Content>
                </List.Item>
              </List>
            </Accordion.Content>
            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='angle right' />
              Semantic UI
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <List>
                <List.Item>                        
                  <List.Content><Link to="/">Semantic UI</Link></List.Content>
                </List.Item>
              </List>
            </Accordion.Content>                   
          </Accordion>
        </Grid.Column>    */}     
      </Grid.Row> 
    )
  }
}






export default withRouter(Sidebar);
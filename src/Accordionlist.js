import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'

class AccordionList extends Component {  
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

       
    )
  }
}






export default withRouter(AccordionList);
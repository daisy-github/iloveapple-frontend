import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {
  Link,
} from 'react-router-dom'
import { Grid, Header, Button, Icon, Item, Label, List, Accordion } from 'semantic-ui-react'
import SimpleList from "./SimpleList";
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
      <Grid.Row className="sidebar-right">
        <Grid.Column className="list_block">
          <Header as='h3'  content='Categories' />
          <SimpleList fetchPostsByCategory={this.props.fetchPostsByCategory} />
        </Grid.Column> 
      </Grid.Row> 
    )
  }
}






export default withRouter(Sidebar);

import React from "react";
import { Grid, Container, Menu, Header, List, Transition, Image, Icon } from 'semantic-ui-react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
const layoutwrapper = Component => {
    class layoutwrapper extends React.Component{
        state = {visible: false }
        handleVisibility = () => this.setState({ visible: !this.state.visible })
        handleItemClick = (e, { name }) => this.setState({ shownav: !this.state.shownav })
        render(){
          const {visible}= this.state;
            return(
                <div>
                    <Grid>
          <header className="banner_home" className={this.state.shownav? "banner_home child" : "banner_home"}>
          
          {this.renderNavBar()}
          <Transition visible={visible} animation='slide right' duration={400} >
            
               <Menu vertical className="mobile_nav">
                <Menu.Item as={Link} to="/" onClick={this.handleVisibility}>
                 Home
                </Menu.Item>
                <Menu.Item as={Link} to="/about" onClick={this.handleVisibility}>About</Menu.Item>
                <Menu.Item as={Link} to="/create" onClick={this.handleVisibility}>Add Post</Menu.Item>
              </Menu>
            
          </Transition>
          
          <Container>
            <Grid.Row className="banner_text">
              <Grid.Column>
                <Header as='h2' textAlign='center'>
                  Share your amazing experience
                </Header>
              </Grid.Column>
            </Grid.Row> 
          </Container>          
          </header>
          </Grid>
          <Grid>
      <Container>
          <Grid>
          <Component {...this.props} />
          </Grid>
      </Container>
      </Grid>
                
                </div>
            );
        }
        renderNavBar() {
    
            return (
              <Container>
              <Grid>        
                   <Grid.Row className="header_row">
                      <Grid.Column computer={6} mobile={10} tablet={6}>
                        <Link to="/" className="logo">i💖Apple</Link>
                      </Grid.Column>
                      <Grid.Column computer={10} mobile={6} tablet={10}>
                        <Menu secondary className="navigation">
                          <Menu.Menu position='right'>
                              <Menu.Item 
                              as={Link}
                              to="/"
                              name='Home' 
                              
                              />
                              <Menu.Item
                                as={Link}
                                to="/about"
                                name='About'
                                
                              />
                              <Menu.Item
                                as={Link}
                                to="/create"
                                name='Add Post'
                                
                              />                      
                              <Menu.Item
                                name='bars'                        
                                onClick={this.handleVisibility}
                                className="button_mobile"
                              >
                                <Icon name='bars' />
                              </Menu.Item>
                          </Menu.Menu>
                        </Menu>
                      </Grid.Column>
                   </Grid.Row>        
              </Grid>
              </Container>
            )
          }
    }
    return layoutwrapper;
};
export default layoutwrapper;
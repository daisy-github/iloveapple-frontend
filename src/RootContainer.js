import React, { Component, Fragment } from 'react'
import {
  
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import App from './App'
import Create from './Create'
import About from './About'
import Post from './Post'
import Thankyou from './Thankyou'
import Admin from './Admin';

class RootContainer extends Component {
  
  render() {
    

    return (
      <Router>        
        <Fragment>     
            <Switch>
              <Route  path="/about" component={About} />
              <Route exact path="/" component={App} />
              <Route  path="/create" component={Create} />
              <Route  path="/post/:id" component={Post} />
              <Route  path="/thanks" component={Thankyou} />
              <Route  path="/admin" component={Admin} />
            </Switch>           
        </Fragment>
      </Router>
    )
  }
}
export default RootContainer;

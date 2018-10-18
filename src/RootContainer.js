import React, { Component, Fragment } from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import App from './App'
import Create from './Create'
import About from './About'
import Post from './Post'
class RootContainer extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {this.renderNavBar()}
          {this.renderRoute()}
        </Fragment>
      </Router>
    )
  }

   renderNavBar() {
    return (
      <nav className="pa3 pa4-ns">
        <Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Home">
          Home
        </Link><br/>
        <Link className="link dim black b f6 f5-ns dib mr3" to="/about" title="About">
          About
        </Link><br/>
        <NavLink
          className="link dim f6 f5-ns dib mr3 black"
          activeClassName="gray"
          exact={true}
          to="/create"
          title="Post"
        >
          Add Post
        </NavLink>
      </nav>
    )
  }

  renderRoute() {
    return (
      <div className="fl w-100 pl4 pr4">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={App} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/post/:id" component={Post} />
        </Switch>
      </div>
    )
  }
}



export default RootContainer

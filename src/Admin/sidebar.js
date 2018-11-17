import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import style from './Styles';

class Side extends Component {
  constructor(props){
    super(props);
    this.state = {openCntctMenu:false}
  }

  componentWillReceiveProps(nextProps){
    this.setState({openCntctMenu:false})
  }

  render() {
    console.log("this",this.props.props.location)
    const path = this.props.props.location.pathname;
    return (
      <Sidebar
        as={Menu}
        animation="slide along"
        style={style.iamsidebar}
        width={(this.props.toggelwidth) ? 'small' : 'very thin'}
        onHide={this.props.handleSidebarHide}
        visible={this.props.visible}
        icon="labeled"
        vertical
        inverted
        id='sidebar'
        className="sider"
      >
        <div>
          <Menu.Item
            name="/admin/posts"
            
            as={Link}
            to="/admin/posts"
            className={path === "/admin" || path === "/admin/posts"?"active":""}
          >
            <Icon name="clipboard list" className="menuIcon"/>
            {
              this.props.toggelwidth &&
                'Posts'
            }
          </Menu.Item>
          
          
        </div>
      </Sidebar>
    );
  }
}

export default Side;

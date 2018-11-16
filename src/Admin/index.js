import React from 'react';
import style from './Styles';
import Side from './sidebar';
import { StaticRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Posts from './posts';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Dropdown } from 'semantic-ui-react';
import {$} from "jquery";

class Admin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { visible: false, width: 'small', wid: true };
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.handleSidebarHide = this.handleSidebarHide.bind(this);
      }
      toggleVisibility(){
        if(window.innerWidth > 767) {
          console.log("hello 767");
          const setwidth = (this.state.wid) ? 'small' : 'very thin';
          this.setState({ width: setwidth, wid: !this.state.wid });
          this.setState({ visible: true })
        }
        else{
          this.setState({ visible: !this.state.visible })
          console.log("hello",this.state.visible);
        }
      }
      handleSidebarHide() {
        if(window.innerWidth <768) {
          this.setState({ visible: false })
        }
        else{
          this.setState({ visible: true })
        }
      }
      
      componentDidMount() {
        
         if(window.innerWidth > 767) {
          document.getElementById("sidebar").classList.add("visible");
          
        }
         if(window.innerWidth < 768) {
          document.getElementById("sidebar").classList.remove("visible");
        }
      }
      
    render(){
        const trigger = (
            <span className="account_name">
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar style={{verticalAlign:'top'}}/>
              <span>Account Name<br/><span>Admin</span></span>
              
      
            </span>
          )
      
          const options = [
            {
              key: 'user',
              text: (
                <span>
                  Signed in as <strong>Bob Smith</strong>
                </span>
              ),
              disabled: true,
            },
            
            { key: 'sign-out', text: 'Sign Out', onClick:this.handleSignout},
          ];
          const { visible } = this.state;
        return(
        <div className="main-wrapper">
        <div className="main-side">
          <div className="lefts-align">
            <Button attached="left" onClick={this.toggleVisibility} style={style.menuBtn}>
              <Icon name="sidebar" />
            </Button>
            
            <Link to="/" className="admin-logo">i💖Apple</Link>
            
          </div>
          <div className="rights-align">
            <Dropdown trigger={trigger} options={options} className="account"/>
          </div>
        </div>
        <Sidebar.Pushable as={Segment} style={style.sidebarCont}>
          <Side toggelwidth={this.state.wid} handleSidebarHide={this.handleSidebarHide} visible={visible}/> 
          <Sidebar.Pusher style={style.applCont} className={(this.state.wid) ? 'thin' : 'very thin'} >
            <Segment basic>
              <Route path="/admin/post" component={Posts} />
            
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
        )
    }
}
 




export default Admin;
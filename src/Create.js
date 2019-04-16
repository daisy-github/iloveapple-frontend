import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Grid, Container, Menu, Header, List, Transition, Image, Icon, Form, Select, Button  } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';
import LayoutWrapper from './LayoutWrapper';
import StateRenderer from './StateRenderer';

const emailRgx = /(^.{4,8}^$|^.*@.*\..*$)/;
const phoneno = /^\d{10}$/;
class Create extends Component {
  state = {
    title: '',
    content: '',
    device:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    city:'',
    zip:'',
    deviceType:'',

    deviceerror:false,
    fnameerror:false,
    lnameerror:false,
    emailerror:false,
    phoneerror:false,
    cityerror:false,
    ziperror:false,
    inprogress: false,
    countryerror:false,
    stateerror:false,
    devicetypeerror:false
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
      console.log('========props data=====',nextProps);
      // if (nextProps.fetchCountires.GetCountries) {
      //   this.setState({countries : nextProps.fetchCountires.GetCountries});
      // }
      // if (nextProps.fetchStates.GetStates) {
      //   this.setState({statesArr : nextProps.fetchStates.GetStates});
      // }
    }
  }

  handleCountryChange = (event) => {
        const { name, value } = event.target;
        this.setState({ country:value});
       //this.fetchStatesList(name,value);
       
  }

  handleStateChange = (event) => {
        const { name, value } = event.target;
        this.setState({ state:value});
  }

  fetchStatesList = async(name, value) => {
    if(name == "country"){
      await this.props.fetchStates.refetch({
         skip:false,
         country:value
      })
    }
  }

  render() {
    let countries = this.props.data.GetCountries;
    const genderOptions = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]
    return (
      <Grid.Row className="wrapper">
        <Grid.Column computer={12} mobile={16} tablet={16}>
        

        <React.Fragment>
         <div className="equal_width">
               <div>
                  <select name="country" onChange={this.handleCountryChange} id="country">
                        <option value="">Select Country</option>
                     {countries != undefined ? countries.map(function(country){
                       return(
                          <option key={country.country} value={country.country}>{country.country}</option>
                        )
                     }) : null }
                  </select>
                  {this.state.countryerror?<p className="errortext">Please select country</p>:""}
                </div>
                <div>
                <StateRenderer
            country={this.state.country}
            
          />
                </div>
              </div>
        </React.Fragment>
       
 
  
  
        </Grid.Column>
      
      </Grid.Row>
    )
  }

  handlePost = async e => {
    e.preventDefault()
    var country = document.getElementById('country');
    var state = document.getElementById('state');
    this.setState({inprogress: true});
    console.log("country",country.options[country.selectedIndex].value,state.options[state.selectedIndex].value)
     if(this.state.email==""&&this.state.phone==""&&this.state.deviceType==""&&this.state.zip==""  &&this.state.city==""  &&this.state.lastName==""  &&this.state.firstName=="" && this.state.device=="" &&  state.value==""&& country.value==""){
      this.setState({emailerror:true,phoneerror:true,devicetypeerror:true,ziperror:true,deviceerror:true,fnameerror:true,lnameerror:true,cityerror:true,stateerror:true,countryerror:true,inprogress: false});
    }
    else if
      (this.state.device == ""){
      this.setState({deviceerror:true,inprogress: false});
    }
    else if(this.state.firstName==""){
      this.setState({fnameerror:true,inprogress: false});
    }
    else if(this.state.lastName==""){
      this.setState({lnameerror:true,inprogress: false});
    }
    else if (!(this.state.email).match(emailRgx)) {
      this.setState({emailerror: true,inprogress: false});
    }
    else if (!(this.state.phone).match(phoneno)) {
      this.setState({phoneerror: true,inprogress: false});
    }
    else if(this.state.city==""){
      this.setState({cityerror:true,inprogress: false});
    }
    else if(this.state.zip==""){
      this.setState({ziperror:true,inprogress: false});
    }
    
    else if(country.options[country.selectedIndex].value==""){
      this.setState({countryerror:true,inprogress: false});
    }
    else if(state.options[state.selectedIndex].value==""){
      this.setState({stateerror:true,inprogress: false});
    }
    else{
      const { title, content, deviceType, device, firstName, lastName, email, phone, country, state, city,zip } = this.state
        await this.props.createPost({
          data: { 
             title, 
             content,
             deviceType,
             device,
             firstName,
             lastName,
             email,
             phone,
             country,
             state,
             city,
             zip
           },
        })
        this.props.history.replace('/thanks')
        this.setState({inprogress: false});
    }
    

  }
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($data: PostTypeInput!) {
    Post(data: $data)
  }`
const FETCH_COUNTRIES = gql`
  query fetchCountires {
    GetCountries{
      country
    }
  }`
const FETCH_STATES = gql`
  query fetchStates($country:String!) {
    GetStates(country:$country){
      states
    }
  }`


export default (graphql(FETCH_COUNTRIES) (LayoutWrapper(Create)));
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql,compose } from 'react-apollo';
import  { gql } from 'apollo-boost';
import { Grid, Container, Menu, Header, List, Transition, Image, Icon, Form, Select, Button  } from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField';

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

    deviceerror:false,
    fnameerror:false,
    lnameerror:false,
    emailerror:false,
    phoneerror:false,
    cityerror:false,
    ziperror:false,
    inprogress: false,
    countryerror:false,
    stateerror:false
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
      if (nextProps.fetchCountires.GetCountries) {
        this.setState({countries : nextProps.fetchCountires.GetCountries});
      }
      if (nextProps.fetchStates.GetStates) {
        this.setState({statesArr : nextProps.fetchStates.GetStates});
      }
    }
  }

  handleCountryChange = (event) => {
        const { name, value } = event.target;
       this.fetchStatesList(name,value);
       
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
    let countries = this.state.countries;
    const genderOptions = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]
    return (
      <Grid.Row className="wrapper">
        <Grid.Column computer={2} mobile={16} tablet={16}></Grid.Column>
        <Grid.Column computer={12} mobile={16} tablet={16}>
          <Header as="h2">Add Experience</Header>
          <form onSubmit={this.handlePost}>
            <div className="full_width">
              <TextField
                id="outlined-dense"
                label="Title"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullWidth="true"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="full_width">
              <TextField
                id="outlined-textarea"
                label="Content"
                placeholder="Content"
                multiline
                className="form_field textarea"
                margin="normal"
                variant="outlined"
                rows='4'
                fullWidth="true"
                onChange={e => this.setState({ content: e.target.value })}
                value={this.state.content}

              />

            </div>
            <div className="full_width">
              <select name="deviceType" onChange={e => this.setState({ deviceType: e.target.value })} id="country">
                        <option value="">Select Device Type</option>
                        <option value="0">iPhone</option>
                        <option value="1">iPad</option>
                        <option value="2">MacBook</option>
                        <option value="3">iMac</option>
                        <option value="4">Apple Watch</option>
                     
                  </select>
                  {this.state.countryerror?<p className="errortext">Please select country</p>:""}
            </div>
            <div className="full_width">
              <TextField
                id="outlined-dense"
                label="Device"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullWidth="true"
                onChange={e => this.setState({ device: e.target.value, deviceerror: false })}
                value={this.state.device}
                helperText={this.state.deviceerror?"Please enter device name":""}
              />
            </div>
            <div className="equal_width">            
              <div>
                <TextField
                  id="outlined-dense"
                  label="First Name"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ firstName: e.target.value, fnameerror: false})}
                  value={this.state.firstName}
                  helperText={this.state.fnameerror?"Please enter First name":""}
                />
              </div>
              <div>
                <TextField
                  id="outlined-dense"
                  label="Last Name"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ lastName: e.target.value, lnameerror: false })}
                  value={this.state.lastName}
                  helperText={this.state.lnameerror?"Please enter Last name":""}
                />
              </div>
            </div>
            <div className="equal_width">            
              <div>
                <TextField
                  id="outlined-dense"
                  label="Email"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ email: e.target.value, emailerror: false})}
                  value={this.state.email}
                  helperText={this.state.emailerror?"Please enter Email":""}
                />
              </div>
              <div>
                <TextField
                  id="outlined-dense"
                  label="Phone"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ phone: e.target.value, phoneerror: false })}
                  value={this.state.phone}
                  helperText={this.state.phoneerror?"Please enter Phone Number":""}
                />
              </div>
            </div>
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
                  <select name="state" id="state">
                      <option value="">Select State</option>
                   {this.state.statesArr != undefined && this.state.statesArr.states != undefined ? this.state.statesArr.states.map(function(state){
                      return(
                        <option key={state} value={state}>{state}</option>
                      )
                   }) : null }
                  </select>
                  {this.state.stateerror?<p className="errortext">Please select state</p>:""}
                </div>
              </div>
            <div className="equal_width">            
              <div>
                <TextField
                  id="outlined-dense"
                  label="City"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ city: e.target.value, cityerror: false})}
                  value={this.state.city}
                  helperText={this.state.cityerror?"Please enter City":""}

                />
              </div>
              <div>
                <TextField
                  id="outlined-dense"
                  label="Zipcode"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ zip: e.target.value, ziperror: false })}
                  value={this.state.zip}
                  type="number"
                  helperText={this.state.ziperror?"Please enter Zipcode":""}

                />
              </div>
            </div>
            <div className="form_action">
            <Button type='submit' className=" custom post_button" disabled={!this.state.content || !this.state.title} loading={this.state.inprogress}>Create</Button>
            <Button className="custom" color='grey' onClick={this.props.history.goBack}>Cancel</Button>
            </div>
          </form>
        </Grid.Column>
      {/*<div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handlePost}>
          <h1>Create Post</h1>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ title: e.target.value })}
            placeholder="Title"
            type="text"
            value={this.state.title}
          /><br/>
          <textarea
            className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
            cols={50}
            onChange={e => this.setState({ content: e.target.value })}
            placeholder="Content"
            rows={8}
            value={this.state.content}
          /><br/>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ device: e.target.value })}
            placeholder="Device"
            type="text"
            value={this.state.device}
          /><br/>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ firstName: e.target.value })}
            placeholder="first Name"
            type="text"
            value={this.state.firstName}
          /><br/>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ lastName: e.target.value })}
            placeholder="last Name"
            type="text"
            value={this.state.lastName}
          /><br/>
          <select name="country" onChange={this.handleCountryChange} id="country">
                      <option value="">Select Country</option>
                   {countries != undefined ? countries.map(function(country){
                      return(
                        <option value="1">India</option>
                        <option value="2">Indonesia</option>

                      )
                   }) : null }
                   {this.state.countryerror?<p className="errortext">Please select country</p>:""}
                  
          </select><br/>
          <select name="state" id="state">
                      <option value="">Select State</option>
                   {{this.state.statesArr != undefined && this.state.statesArr.states != undefined ? this.state.statesArr.states.map(function(state){
                      return(
                        <option value="1">Punjab</option>
                      )
                   }) : null }
          </select>
          {this.state.stateerror ? <p className="errortext">Please select state</p>:""}
          
          <br/>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ city: e.target.value })}
            placeholder="city"
            type="text"
            value={this.state.city}
          /><br/>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            onChange={e => this.setState({ zip: e.target.value })}
            placeholder="zipcode"
            type="text"
            value={this.state.zip}
          /><br/>
          <input
            className={`pa3 bg-black-10 bn ${this.state.content &&
              this.state.title &&
              'dim pointer'}`}
            disabled={!this.state.content || !this.state.title}
            type="submit"
            value="Create"
          />
          <a className="f6 pointer" onClick={this.props.history.goBack}>
            or cancel
          </a>
        </form>
      </div>*/}
      </Grid.Row>
    )
  }

  handlePost = async e => {
    e.preventDefault()
    var country = document.getElementById('country');
    var state = document.getElementById('state');
    console.log( "kk",country.value );
    this.setState({inprogress: true});
     if(this.state.zip==""  &&this.state.city==""  &&this.state.lastName==""  &&this.state.firstName=="" && this.state.device==""|| state.value=="" || country.value==""){
      
      this.setState({ziperror:true,deviceerror:true,fnameerror:true,lnameerror:true,cityerror:true,stateerror:true,countryerror:true});
      this.setState({inprogress: false});

    }
    else if
      (this.state.device == ""){
      this.setState({deviceerror:true});
      this.setState({inprogress: false});

    }
    else if(this.state.firstName==""){
      
      this.setState({fnameerror:true});
      this.setState({inprogress: false});

    }
    else if(this.state.lastName==""){
      
      this.setState({lnameerror:true});
      this.setState({inprogress: false});

    }
    else if(this.state.city==""){
     
      this.setState({cityerror:true});
      this.setState({inprogress: false});

    }
    else if(this.state.zip==""){
      
      this.setState({ziperror:true});
      this.setState({inprogress: false});

    }
    else if(state.value==""){
      
      this.setState({cityerror:true});
      this.setState({inprogress: false});

    }
    else if(country.value==""){
      
      this.setState({countryerror:true});
      this.setState({inprogress: false});

    }
   
    else{
      const { title, content, device } = this.state
        await this.props.createPost({
          data: { 
             title, 
             content,
             device 
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
  query fetchStates($country:String!,$skip:Boolean!) {
    GetStates(country:$country)@skip(if: $skip){
      states
    }
  }`

const CreatePostWithMutation = compose(
  graphql(CREATE_POST_MUTATION, {
    props({ mutate }) {
      return {
        createPost(vars) {
          return mutate({
            variables: vars,
          });
        },
      };
    },
 }),
  graphql(FETCH_COUNTRIES, {
    name: 'fetchCountires',
  }),
  graphql(FETCH_STATES, {
    name: 'fetchStates',
    options: ownProps => ({
      variables: {
        country: "",
        skip:true
      },
    }),
  }),
)(Create)

export default withRouter(CreatePostWithMutation)
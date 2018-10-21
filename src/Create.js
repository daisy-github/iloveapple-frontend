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
    device:''
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
   // let states = this.state.states;
   console.log('=======countries=====',this.state);
    //countries.map(function(a){console.log(a)})
    return (
      <Grid.Row className="wrapper">
        <Grid.Column computer={2} mobile={16} tablet={16}></Grid.Column>
        <Grid.Column computer={12} mobile={16} tablet={16}>
          <Header as="h2">Create Post</Header>
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
              <TextField
                id="outlined-dense"
                label="Device"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullWidth="true"
                onChange={e => this.setState({ device: e.target.value })}
                value={this.state.device}

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
                  onChange={e => this.setState({ firstName: e.target.value })}
                  value={this.state.firstName}

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
                  onChange={e => this.setState({ lastName: e.target.value })}
                  value={this.state.lastName}

                />
              </div>
            </div>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'Country', htmlFor: 'form-select-control-gender' }}
                  placeholder='Country'
                  search
                  searchInput={{ id: 'form-select-control-gender' }}
                />
                <Form.Field
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'State', htmlFor: 'form-select-control-gender' }}
                  placeholder='State'
                  search
                  searchInput={{ id: 'form-select-control-gender' }}
                />
              </Form.Group>
            </Form>
            <div className="equal_width">            
              <div>
                <TextField
                  id="outlined-dense"
                  label="City"
                  className="form_field"
                  margin="dense"
                  variant="outlined"
                  fullWidth="true"
                  onChange={e => this.setState({ city: e.target.value })}
                  value={this.state.city}


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
                  onChange={e => this.setState({ zip: e.target.value })}
                  value={this.state.zip}


                />
              </div>
            </div>
            <div className="form_action">
            <Button type='submit' className=" custom post_button" disabled={!this.state.content || !this.state.title}>Create</Button>
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
          <select name="country" onChange={this.handleCountryChange}>
                      <option value="">Select Country</option>
                   {countries != undefined ? countries.map(function(country){
                      return(
                        <option value="1">India</option>
                        <option value="2">Indonesia</option>

                      )
                   }) : null }
                  
          </select><br/>
          <select name="state">
                      <option value="">Select State</option>
                   {{this.state.statesArr != undefined && this.state.statesArr.states != undefined ? this.state.statesArr.states.map(function(state){
                      return(
                        <option value="1">Punjab</option>
                      )
                   }) : null }
          </select>
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
    const { title, content, device } = this.state
    await this.props.createPost({
      data: { 
         title, 
         content,
         device 
       },
    })
    this.props.history.replace('/')
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
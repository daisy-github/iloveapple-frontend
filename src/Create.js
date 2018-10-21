import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql,compose } from 'react-apollo';
import  { gql } from 'apollo-boost';

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
   // let states = this.state.states;
   console.log('=======countries=====',this.state);
    //countries.map(function(a){console.log(a)})
    return (
      <div className="pa4 flex justify-center bg-white">
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
                   {/*{countries != undefined ? countries.map(function(country){
                      return(*/}
                        <option value="1">India</option>
                        <option value="2">Indonesia</option>

                      {/*)
                   }) : null }
                   */}
          </select><br/>
          <select name="state">
                      <option value="">Select State</option>
                   {/*{{this.state.statesArr != undefined && this.state.statesArr.states != undefined ? this.state.statesArr.states.map(function(state){
                      return(*/}
                        <option value="1">Punjab</option>
                      {/*{)
                   }) : null }*/}
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
      </div>
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
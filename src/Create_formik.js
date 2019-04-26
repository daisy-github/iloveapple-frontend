import React, { Component } from "react";
import { graphql, compose, Mutation } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { Grid, Header, Button, Checkbox } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import LayoutWrapper from "./LayoutWrapper";
import StateRenderer from "./StateRenderer";
import { Formik, Field, Form, ErrorMessage } from "formik";
import FormComponent from "./FormComponent";
const emailRgx = /(^.{4,8}^$|^.*@.*\..*$)/;
const phoneno = /^\d{10}$/;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const validate = values => {
  return sleep(300).then(() => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    }
  });
};
class Create extends Component {
  state = {
    title: "",
    content: "",
    device: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    zip: "",
    deviceType: "",
    country: "",
    deviceerror: false,
    fnameerror: false,
    lnameerror: false,
    emailerror: false,
    phoneerror: false,
    cityerror: false,
    ziperror: false,
    inprogress: false,
    countryerror: false,
    stateerror: false,
    devicetypeerror: false
  };

  handleCountryChange = event => {
    const { name, value } = event.target;
    this.setState({ country: value });
    //this.fetchStatesList(name,value);
  };

  handleStateChange = event => {
    const { name, value } = event.target;
    this.setState({ state: value });
  };

  render() {
    let countries = this.props.data.GetCountries;
    const genderOptions = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" }
    ];
    return (
      <Grid.Row className="wrapper">
        <Grid.Column computer={2} mobile={16} tablet={16} />
        <Grid.Column computer={12} mobile={16} tablet={16}>
          <Formik
            initialValues={{ firstName: "", device: "" }}
            validate={validate}
            onSubmit={values => {
              sleep(500).then(() => {
                alert(JSON.stringify(values, null, 2));
              });
            }}
          >
            {formikProps => <FormComponent {...formikProps} />}
          </Formik>
        </Grid.Column>
      </Grid.Row>
    );
  }

  handlePost = async e => {
    e.preventDefault();
    var country = document.getElementById("country");
    var state = document.getElementById("state");
    this.setState({ inprogress: true });
    if (
      this.state.email == "" &&
      this.state.phone == "" &&
      this.state.deviceType == "" &&
      this.state.zip == "" &&
      this.state.city == "" &&
      this.state.lastName == "" &&
      this.state.firstName == "" &&
      this.state.device == "" &&
      state.value == "" &&
      country.value == ""
    ) {
      this.setState({
        emailerror: true,
        phoneerror: true,
        devicetypeerror: true,
        ziperror: true,
        deviceerror: true,
        fnameerror: true,
        lnameerror: true,
        cityerror: true,
        stateerror: true,
        countryerror: true,
        inprogress: false
      });
    } else if (this.state.device == "") {
      this.setState({ deviceerror: true, inprogress: false });
    } else if (this.state.firstName == "") {
      this.setState({ fnameerror: true, inprogress: false });
    } else if (this.state.lastName == "") {
      this.setState({ lnameerror: true, inprogress: false });
    } else if (!this.state.email.match(emailRgx)) {
      this.setState({ emailerror: true, inprogress: false });
    } else if (!this.state.phone.match(phoneno)) {
      this.setState({ phoneerror: true, inprogress: false });
    } else if (this.state.city == "") {
      this.setState({ cityerror: true, inprogress: false });
    } else if (this.state.zip == "") {
      this.setState({ ziperror: true, inprogress: false });
    } else if (country.options[country.selectedIndex].value == "") {
      this.setState({ countryerror: true, inprogress: false });
    } else if (state.options[state.selectedIndex].value == "") {
      this.setState({ stateerror: true, inprogress: false });
    } else {
      const {
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
      } = this.state;
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
        }
      });
      this.props.history.replace("/thanks");
      this.setState({ inprogress: false });
    }
  };
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($data: PostTypeInput!) {
    Post(data: $data)
  }
`;
const FETCH_COUNTRIES = gql`
  query fetchCountires {
    GetCountries {
      country
    }
  }
`;

const CreatePostWithMutation = compose(
  graphql(CREATE_POST_MUTATION, {
    props({ mutate }) {
      return {
        createPost(vars) {
          return mutate({
            variables: vars
          });
        }
      };
    }
  }),
  graphql(FETCH_COUNTRIES)
)(Create);

export default LayoutWrapper(withRouter(CreatePostWithMutation));

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import {
  Grid,
  Container,
  Menu,
  Header,
  List,
  Transition,
  Image,
  Icon,
  Form,
  Select,
  Button
} from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import LayoutWrapper from "./LayoutWrapper";

const emailRgx = /(^.{4,8}^$|^.*@.*\..*$)/;
const phoneno = /^\d{10}$/;
class FormComponent extends Component {
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

  render() {
    console.log("props", this.props);
    let countries = this.state.countries;
    const genderOptions = [
      { key: "m", text: "Male", value: "male" },
      { key: "f", text: "Female", value: "female" }
    ];
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h1>Create Post</h1>

        <Field component={TextField} name="title" label="title" />
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    );
  }
}

export default LayoutWrapper(FormComponent);

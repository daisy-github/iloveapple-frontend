import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { Grid, Header, Button } from "semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import LayoutWrapper from "./LayoutWrapper";
import StateRenderer from "./StateRenderer";

const emailRgx = /(^.{4,8}^$|^.*@.*\..*$)/;
const phoneno = /^\d{10}$/;
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
                rows="4"
                fullWidth="true"
                onChange={e => this.setState({ content: e.target.value })}
                value={this.state.content}
              />
            </div>
            <div className="full_width">
              <select
                name="deviceType"
                onChange={e =>
                  this.setState({
                    deviceType: e.target.value,
                    devicetypeerror: false
                  })
                }
                id="country"
              >
                <option value="">Select Device Type</option>
                <option value="1">iPhone</option>
                <option value="2">iPad</option>
                <option value="3">MacBook</option>
                <option value="4">iMac</option>
                <option value="5">Apple Watch</option>
              </select>
              {this.state.devicetypeerror ? (
                <p className="errortext">Please choose device</p>
              ) : (
                ""
              )}
            </div>
            <div className="full_width">
              <TextField
                id="outlined-dense"
                label="Device"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullWidth="true"
                onChange={e =>
                  this.setState({ device: e.target.value, deviceerror: false })
                }
                value={this.state.device}
                helperText={
                  this.state.deviceerror ? "Please enter device name" : ""
                }
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
                  onChange={e =>
                    this.setState({
                      firstName: e.target.value,
                      fnameerror: false
                    })
                  }
                  value={this.state.firstName}
                  helperText={
                    this.state.fnameerror ? "Please enter First name" : ""
                  }
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
                  onChange={e =>
                    this.setState({
                      lastName: e.target.value,
                      lnameerror: false
                    })
                  }
                  value={this.state.lastName}
                  helperText={
                    this.state.lnameerror ? "Please enter Last name" : ""
                  }
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
                  onChange={e =>
                    this.setState({ email: e.target.value, emailerror: false })
                  }
                  value={this.state.email}
                  helperText={
                    this.state.emailerror
                      ? "Please enter valid Email address"
                      : ""
                  }
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
                  type="number"
                  onChange={e =>
                    this.setState({ phone: e.target.value, phoneerror: false })
                  }
                  value={this.state.phone}
                  helperText={
                    this.state.phoneerror
                      ? "Please enter valid Phone Number"
                      : ""
                  }
                />
              </div>
            </div>
            <div className="equal_width">
              <div>
                <select
                  name="country"
                  onChange={this.handleCountryChange}
                  id="country"
                >
                  <option value="">Select Country</option>
                  {countries !== undefined
                    ? countries.map(function(country) {
                        return (
                          <option key={country.country} value={country.country}>
                            {country.country}
                          </option>
                        );
                      })
                    : null}
                </select>
                {this.state.countryerror ? (
                  <p className="errortext">Please select country</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <StateRenderer country={this.state.country} />
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
                  onChange={e =>
                    this.setState({ city: e.target.value, cityerror: false })
                  }
                  value={this.state.city}
                  helperText={this.state.cityerror ? "Please enter City" : ""}
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
                  onChange={e =>
                    this.setState({ zip: e.target.value, ziperror: false })
                  }
                  value={this.state.zip}
                  type="number"
                  helperText={this.state.ziperror ? "Please enter Zipcode" : ""}
                />
              </div>
            </div>
            <div className="form_action">
              <Button
                type="submit"
                className=" custom post_button"
                disabled={!this.state.content || !this.state.title}
                loading={this.state.inprogress}
              >
                Create
              </Button>
              <Button className="custom" color="grey">
                <Link to="/">Cancel</Link>
              </Button>
            </div>
          </form>
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

import React from "react";
import { Formik, Field, Form } from "formik";
import { graphql, compose, Query } from "react-apollo";
import { gql } from "apollo-boost";
import TextField from "./TextArea";
import TextArea from "./TextArea";
import SubmitField from "./SubmitField";
import CountryField from "./CountryField";
import DeviceField from "./DeviceField";
import LayoutWrapper from "./LayoutWrapper";
import { withRouter } from "react-router-dom";
import StateRenderer from "./StateRenderer";
import DeviceRenderer from "./DeviceRenderer";
import { Grid, Button, Checkbox } from "semantic-ui-react";
let Yup = require("yup");

class Create extends React.Component {
  state = { phoneaccessibility: true, emailaccessibility: true };
  setaccessibilityphone = () => {
    console.log("setaccessibilityphone");
    this.setState({ phoneaccessibility: !this.state.phoneaccessibility });
  };
  setaccessibilityemail = () => {
    console.log("setaccessibilityemail");
    this.setState({ emailaccessibility: !this.state.emailaccessibility });
  };
  render() {
    const {
      data: { loading, GetCountries },
      createPost,
      history
    } = this.props;
    return (
      <React.Fragment>
        {loading ? (
          <div>Loading ...</div>
        ) : (
          <Grid.Row className="wrapper">
            <Grid.Column computer={2} mobile={16} tablet={16} />
            <Grid.Column computer={12} mobile={16} tablet={16}>
              <Query query={FETCH_DEVICE_TYPES}>
                {({ data: { loading, GetDeviceTypes } }) => {
                  return (
                    // eslint-disable-next-line no-unused-expressions
                    <Formik
                      initialValues={{
                        title: "",
                        content: "",
                        device: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        zip: "",
                        country: "",
                        deviceType: "",
                        state:""
                      }}
                      validationSchema={Yup.object().shape({
                        title: Yup.string().required(),
                        content: Yup.string().required(),
                        deviceType: Yup.string().required(),
                        device: Yup.string().required(),
                        firstName: Yup.string().required(),
                        lastName: Yup.string().required(),
                        email: Yup.string()
                          .required()
                          .email(),
                        phone: Yup.number().required(),
                        zip: Yup.number().required(),
                        country: Yup.string().required(),
                        state: Yup.string().required(),
                      })}
                      onSubmit={values => {
                       // console.log('====device====',values);return false;
                        if (values) {
                          createPost({ data: values })
                            .then((_res, loading, error) => {
                              if (error) return "💩 Oops!";
                              if (loading) return "Loading...";
                              history.push("/thanks");
                            })
                            .catch(error => {
                              console.log(
                                "there was an error sending the query",
                                error
                              );
                            });
                        }
                      }}
                      render={({ values }) => (
                       
                        <Form>
                          <div className="alert alert-warning" role="alert">
                            This is form saves each field on blur
                          </div>
                          <div className="full_width">
                            <Field
                              component={TextField}
                              label="Title"
                              margin="dense"
                              variant="outlined"
                              fullwidth="true"
                              name="title"
                            />
                          </div>
                          <div className="full_width">
                            <Field
                              component={TextArea}
                              name="content"
                              label="Content"
                              rows="4"
                              placeholder="Content"
                              multiline
                              fullWidth="true"
                              margin="normal"
                              variant="outlined"
                            />
                          </div>
                          <div className="full_width">
                            <Field
                              component={DeviceField}
                              label="Device Type"
                              margin="dense"
                              variant="outlined"
                              fullwidth="true"
                              name="deviceType"
                              deviceTypes={GetDeviceTypes}
                            />
                          </div>
                          <div>
                          <Field
                              component={DeviceRenderer}
                              label="Device"
                              margin="dense"
                              variant="outlined"
                              fullwidth="true"
                              name="device"
                              typeId={values.deviceType} 
                            />
                            
                          </div>

                          <div className="equal_width">
                            <div>
                              <Field
                                component={TextField}
                                label="First Name"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="firstName"
                              />
                            </div>
                            <div>
                              <Field
                                component={TextField}
                                label="Last Name"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="lastName"
                              />
                            </div>
                          </div>
                          <div className="equal_width">
                            <div className="relative first">
                              {" "}
                              <Field
                                component={TextField}
                                label="Email"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="email"
                              />
                              <div className="accessibility">
                                <label>
                                  {this.state.emailaccessibility
                                    ? "Public"
                                    : "Private"}
                                </label>
                                <Checkbox
                                  toggle
                                  onChange={this.setaccessibilityemail}
                                />
                              </div>
                            </div>
                            <div className="relative">
                              <Field
                                component={TextField}
                                label="Phone"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="phone"
                              />
                              <div className="accessibility">
                                <label>
                                  {this.state.phoneaccessibility
                                    ? "Public"
                                    : "Private"}
                                </label>
                                <Checkbox
                                  toggle
                                  onChange={this.setaccessibilityphone}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="equal_width">
                            <div>
                              <Field
                                component={CountryField}
                                label="Country"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="country"
                                countries={GetCountries}
                              />
                              <div>
                              <Field
                                component={StateRenderer}
                                label="State"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="state"
                                country={values.country}
                              />
                              </div>
                            </div>
                            <div>
                              <Field
                                component={TextField}
                                label="Zipcode"
                                margin="dense"
                                variant="outlined"
                                fullwidth="true"
                                name="zip"
                              />
                            </div>
                          </div>
                          <div className="form_action">
                            <Field
                              component={SubmitField}
                              name="submit"
                              label="submit"
                            />
                            <Button className="custom" color="grey">
                              Cancel
                            </Button>
                          </div>
                          {/* <DisplayFormikState
                      values={values}
                      touched={touched}
                      errors={errors}
                    /> */}
                        </Form>
                      )}
                    />
                  );
                }}
              </Query>
            </Grid.Column>
          </Grid.Row>
        )}
      </React.Fragment>
    );
  }
}
// class Create = ({ data: { loading, GetCountries }, createPost, history }) => {
//   if (loading) {
//     return <div>Loading ...</div>;
//   }

//   return (

//   );
// };

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
const FETCH_DEVICE_TYPES = gql`
  query fetchDevicetTypes {
    GetDeviceTypes {
      _id
      type
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

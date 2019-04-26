import React from "react";
import { Formik, Field, Form } from "formik";
import { graphql, compose } from "react-apollo";
import { gql } from "apollo-boost";
import TextField from "./TextArea";
import TextArea from "./TextArea";
import SubmitField from "./SubmitField";
import CountryField from "./CountryField";
import DeviceField from "./DeviceField";
import { DisplayFormikState } from "./helper";
import LayoutWrapper from "./LayoutWrapper";
import { Link, withRouter } from "react-router-dom";
import StateRenderer from "./StateRenderer";
import {
  Grid,
  Container,
  Menu,
  Header,
  List,
  Transition,
  Image,
  Icon,
  Select,
  Button
} from "semantic-ui-react";
let Yup = require("yup");
const Create = ({ data: { loading, GetCountries }, createPost, history }) => {
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <Grid.Row className="wrapper">
      <Grid.Column computer={2} mobile={16} tablet={16} />
      <Grid.Column computer={12} mobile={16} tablet={16}>
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
            deviceType: ""
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required(),
            content: Yup.string().required(),
            device: Yup.string().required(),
            firstName: Yup.string().required(),
            lastName: Yup.string().required(),
            email: Yup.string()
              .required()
              .email(),
            phone: Yup.number().required(),
            zip: Yup.number().required(),
            country: Yup.string().required(),
            deviceType: Yup.string().required()
          })}
          onSubmit={values => {
            if (values) {
              createPost({ data: values })
                .then((res, loading, error) => {
                  if (error) return "💩 Oops!";
                  if (loading) return "Loading...";
                  history.push("/thanks");
                })
                .catch(error => {
                  console.log("there was an error sending the query", error);
                });
            }
          }}
          render={({
            values,
            touched,
            errors,
            handleBlur,
            setFieldTouched,
            props
          }) => (
            <Form>
              console.log("props data", this.props)
              <div className="alert alert-warning" role="alert">
                This is form saves each field on blur
              </div>
              <Field
                component={TextField}
                label="Title"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="title"
              />
              <Field
                component={TextArea}
                name="content"
                label="Content"
                rows="4"
                placeholder="Content"
                multiline
                fullWidth="true"
                className="form_field textarea"
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                label="Device"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="device"
              />
              <Field
                component={DeviceField}
                label="Device Type"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="deviceType"
              />
              <Field
                component={TextField}
                label="First Name"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="firstName"
              />
              <Field
                component={TextField}
                label="Last Name"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="lastName"
              />
              <Field
                component={TextField}
                label="Email"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="email"
              />
              <Field
                component={TextField}
                label="Phone"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="phone"
              />
              <Field
                component={CountryField}
                label="Country"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="country"
                countries={GetCountries}
              />
              <div>
                <StateRenderer country={values.country} />
              </div>
              <Field
                component={TextField}
                label="Zipcode"
                className="form_field"
                margin="dense"
                variant="outlined"
                fullwidth="true"
                name="zip"
              />
              <Field component={SubmitField} name="submit" label="submit" />
              <DisplayFormikState
                values={values}
                touched={touched}
                errors={errors}
              />
            </Form>
          )}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

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

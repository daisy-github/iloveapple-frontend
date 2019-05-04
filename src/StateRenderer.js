import React from "react";
import { gql } from "apollo-boost";
import LayoutWrapper from "./LayoutWrapper";
import { graphql, Query } from "react-apollo";

const StateRenderer = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  return(
  <Query query={FETCH_STATES} variables={{ country: props.country }}>
    {({ data, error, loading }) => {
      if (error) return "💩 Oops!";
      if (loading) return "Patience young grasshopper...";

      return (
        <select {...field} {...props}>
          <option value="">Select State</option>
          {data.GetStates != null && data.GetStates.states != undefined
            ? data.GetStates.states.map(function(state) {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                );
              })
            : null}
        </select>
      );
    }}
  </Query>
  )
}


const FETCH_STATES = gql`
  query fetchStates($country: String!) {
    GetStates(country: $country) {
      states
    }
  }
`;

export default StateRenderer;

import React from "react";
import { gql } from "apollo-boost";
import LayoutWrapper from "./LayoutWrapper";
import { graphql, Query } from "react-apollo";

const DeviceRenderer = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
   return(
  <Query query={FETCH_DEVICES} variables={{ typeId: props.typeId }}>
    {({ data, error, loading }) => {
      console.log('error msg',error);
      if (error) return "💩 Oops!";
      if (loading) return "Patience young grasshopper...";

      return (
        <select {...field} {...props}>
          <option value="">Select Device</option>
          {data.GetDevicesById != null && data.GetDevicesById !== undefined
            ? data.GetDevicesById.device.map(function(device, index) {
                return (
                  <option key={index} value={device._id}>
                    {device.name}
                  </option>
                );
              })
            : null}
        </select>
      );
    }}
  </Query>
   )
};

const FETCH_DEVICES = gql`
  query fetchDevices($typeId: String!) {
    GetDevicesById(typeId: $typeId) {
      typeId
      typeName
      device {
        _id
        name
      }
    }
  }
`;

export default DeviceRenderer;

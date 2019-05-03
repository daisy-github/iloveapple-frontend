import React from "react";
import { gql } from "apollo-boost";
import LayoutWrapper from "./LayoutWrapper";
import { graphql, Query } from "react-apollo";

const DeviceRenderer = parentprops => (
  <Query query={FETCH_DEVICES} variables={{ country: parentprops.country }}>
    {({ data, error, loading }) => {
      if (error) return "💩 Oops!";
      if (loading) return "Patience young grasshopper...";

      return (
        <select name="state" id="state">
          <option value="">Select Device</option>
          {data.GetDevices != null && data.GetDevices !== undefined
            ? data.GetDevices.device.map(function(device, index) {
                return (
                  <option key={index} value={device.name}>
                    {device.name}
                  </option>
                );
              })
            : null}
        </select>
      );
    }}
  </Query>
);

const FETCH_DEVICES = gql`
  query fetchDevices($country: String!) {
    GetDevices(type: $type) {
      typeId
      typeName
      device {
        name
      }
    }
  }
`;

export default DeviceRenderer;

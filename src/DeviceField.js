import React from "react";

const DeviceField = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  const { deviceTypes } = props;
  return (
    <div className="form-group select">
      {/* <label>{label}</label> */}
      <select {...field} {...props}>
        <option value="" disabled>
          Select Device Type
        </option>
        {deviceTypes !== undefined
          ? deviceTypes.map(function(deviceTypes, index) {
              return (
                <option key={index} value={deviceTypes.type}>
                  {deviceTypes.type}
                </option>
              );
            })
          : null}
      </select>
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  );
};

export default DeviceField;

// export const FETCH_DEVICE_TYPES = gql`
//   query fetchDevicetTypes {
//     GetDeviceTypes {
//       type
//     }
//   }
// `;

// export default graphql(FETCH_DEVICE_TYPES, {})(DeviceField);

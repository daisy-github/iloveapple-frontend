import React from "react";

const DeviceField = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  const { countries } = props;
  console.log("props data", props);
  return (
    <div className="form-group select">
      {/* <label>{label}</label> */}
      <select {...field} {...props}>
        <option value="" disabled>
          Select Device Type
        </option>
        <option value="1">iPhone</option>
        <option value="2">iPad</option>
        <option value="3">MacBook</option>
        <option value="4">iMac</option>
        <option value="5">Apple Watch</option>
      </select>
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  );
};

export default DeviceField;

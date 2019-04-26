import React from "react";

const SubmitField = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="submit"
        value="Submit"
        className={`form-control ${hasError ? "is-invalid" : ""}`}
        {...field}
        {...props}
      />
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  );
};

export default SubmitField;

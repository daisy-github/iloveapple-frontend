import React from "react";
import TextField from "@material-ui/core/TextField";

const TextArea = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <React.Fragment>
      <label>{label}</label>
      <textarea
        className={`form_field ${hasError ? " form_field is-invalid" : ""}`}
        {...field}
        {...props}
      />
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </React.Fragment>
  );
};

export default TextArea;

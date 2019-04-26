import React from "react";

const TextArea = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <div className="full_width">
      <label>{label}</label>
      <textarea
        className={`form-control ${hasError ? "is-invalid" : ""}`}
        {...field}
        {...props}
      />
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  );
};

export default TextArea;

import React from "react";
import TextFieldd from "@material-ui/core/TextField";

const TextField = ({
  field,
  form: { touched, errors },
  label,
  id,
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <React.Fragment>
      {/* <label>{label}</label>
      <input type="text" className={`form-control ${hasError ? "is-invalid" : ""}`} {...field} {...props} />
      {hasError && <div className="invalid-feedback">
          {errors[field.name]}
        </div>} */}

      <TextFieldd
        id={id}
        label={label}
        className={hasError ? "form_field is-invalid" : "form_field"}
        margin="dense"
        variant="outlined"
        fullWidth="true"
        {...field}
        {...props}
        helperText={hasError ? errors[field.name] : ""}
      />
    </React.Fragment>
  );
};

export default TextField;

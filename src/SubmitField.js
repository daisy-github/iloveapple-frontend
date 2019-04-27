import React from "react";
import { Button } from "semantic-ui-react";

const SubmitField = ({ field, form: { touched, errors }, label, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <React.Fragment>
      {/* <label>{label}</label> */}
      {/* <input type="submit" value="Submit" className={`form-control ${hasError ? "is-invalid" : ""}`} {...field} {...props} />
      {hasError && <div className="invalid-feedback">
          {errors[field.name]}
        </div>} */}
      <Button type="submit" className=" custom post_button">
        Create
      </Button>
    </React.Fragment>
  );
};

export default SubmitField;

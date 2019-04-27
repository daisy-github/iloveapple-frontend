import React from "react";

const CountryField = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];
  const { countries } = props;
  console.log("props data", props);
  return (
    <div className="form-group select">
      {/* <label>{label}</label> */}
      <select {...field} {...props}>
        <option value="" disabled>
          Select Country
        </option>
        {countries !== undefined
          ? countries.map(function(country) {
              return (
                <option key={country.country} value={country.country}>
                  {country.country}
                </option>
              );
            })
          : null}
      </select>
      {hasError && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  );
};

export default CountryField;

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.country = !isEmpty(data.country) ? data.country : "";
// Name checks
  if (Validator.isEmpty(data.username)) {
    errors.name = "Username field is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Firstname and Lastname checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required";
  }
if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Lastname field is required";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "Gender field is required";
  }
if (Validator.isEmpty(data.country)) {
    errors.country = "Country field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};
// email regular expression
export const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// password regular expression
export const validatePassword = RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

// check validity
export const checkValidity = (value, rules) => {
  let isValid = true;

  // required validation
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }
  // email validation
  if (rules.email) {
    isValid = validateEmail.test(value) && isValid;
  }
  // password validation
  if (rules.password) {
    isValid = validatePassword.test(value) && isValid;
  }
  // minimum length validation
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  // maximum length validation
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  return isValid;
};

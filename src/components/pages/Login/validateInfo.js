export default function validateInfo(values) {
  let errors = {};


  if (!values.email) {
    errors.email = 'Email required';
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 6 characters or more';
  } else if (values.password.search (/[0-9]/) == -1) {
    errors.password = 'Password must contain atleast 1 numeric value';
  }
  else if (values.password.search (/[A-Z]/) == -1) {
    errors.password = 'Password must contain atleast 1 upper case letter';
  }
  else if (values.password.search (/[a-z]/) == -1) {
    errors.password = 'Password must contain atleast 1 lower case letter';
  }

  return errors;
}
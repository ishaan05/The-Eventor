export default function validateInfo(values) {
  let errors = {};

  if (!values.fullname.trim()) {
    errors.fullname = 'Full Name is required';
  }
  else if (!/^[A-Za-z]+/.test(values.fullname.trim())) {
    errors.fullname = 'Enter a valid full name';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!values.mobile) {
    errors.mobile = 'Mobile Number is required';
  } else if (values.mobile.length < 10) {
    errors.mobile = 'Mobile Number needs to be of 10 digits';
  }

  return errors;
}
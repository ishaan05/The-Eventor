import React, { useState } from 'react';
import '../SignUp/Form.css';
import Navbar from '../../Navbar';
import FormSignup from './FormSignup';
import FormSuccess from './LoginSuccess';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Navbar />
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img login' src='images/svg-10.svg' alt='eventonline' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Login;
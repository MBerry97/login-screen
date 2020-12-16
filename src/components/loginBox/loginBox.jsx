import React from 'react';
import './loginBox.css'
import LoginInputForm from './loginInputForm/loginInputForm';
import LoginText from './loginText/loginText';

const LoginBox = (props) => {
  return (
    <div className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText />
      <LoginInputForm />
    </div>
    </div>
  );
}

export default LoginBox;
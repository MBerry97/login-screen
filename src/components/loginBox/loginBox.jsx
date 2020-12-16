import React from 'react';
import './loginBox.css'
import LoginButton from './loginButton/loginButton';
import LoginInputForm from './loginInputForm/loginInputForm';
import LoginText from './loginText/loginText';
import RememberPassword from './rememberPassword/rememberPassword';


const LoginBox = (props) => {
  return (
    <div className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText />
      <LoginInputForm />
      <LoginButton />
      <RememberPassword />
    </div>
    </div>
  );
}

export default LoginBox;
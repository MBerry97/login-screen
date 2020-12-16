import React from 'react';
import './loginBox.css'
import LoginText from './loginText/loginText';

const LoginBox = (props) => {
  return (
    <div className='loginBox__container'>
      <LoginText />
    </div>
  );
}

export default LoginBox;
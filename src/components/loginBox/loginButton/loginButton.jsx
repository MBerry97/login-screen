import React from 'react';
import '../loginBox.css'
import './loginButton.css'


const LoginButton = (props) => {
  return (
       <div className='loginButton__container'>
      <button type='submit'>Login</button>
      </div>
  );
}

export default LoginButton;
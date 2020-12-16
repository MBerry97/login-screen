import React from 'react';
import './loginText.css'

const LoginText = (props) => {
  return (
    <div className='loginText__container'>
      <span id='login_header'>{props.text1}</span> <br></br>
      <span id='login_instructions'>{props.text2}</span>
    </div>
  );
}

export default LoginText;
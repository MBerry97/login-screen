import React from 'react';
import JumpingDotsAnim from '../../animations/jumpingDotsAnim';
import '../loginBox.css'
import './loginButton.css'

const LoginButton = (props) => {
  const loginText = props.buttonText

  return (
       <div className='loginButton__container'>  
      <button type='submit'>{props.buttonText}</button>
      {loginText.length > 5 && 
      <JumpingDotsAnim />
      }
      </div>
  );
}

export default LoginButton;
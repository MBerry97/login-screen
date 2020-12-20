import React from 'react';
import JumpingDotsAnim from '../../animations/jumpingDotsAnim';
import '../loginBox.css'
import './loginButton.css'

const LoginButton = (props) => {
  const loading = props.loading

  return (
       <div className='loginButton__container'>  
      <button data-testid='loginButton' type='submit' id='loginButton'><span data-testid='loginSpan'>{props.buttonText}
      {loading && 
      <JumpingDotsAnim />
      }
      </span>
      </button>
      </div>
  );
}

export default LoginButton;
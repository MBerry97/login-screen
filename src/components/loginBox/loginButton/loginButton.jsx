import React from 'react';
import JumpingDotsAnim from '../../animations/jumpingDotsAnim';
import '../loginBox.css'
import './loginButton.css'

const LoginButton = (props) => {
  const loading = props.loading

  return (
       <div className='loginButton__container'>  
      <button type='submit'>{props.buttonText}</button>
      {/* {loading &&  */}
      <JumpingDotsAnim />
      {/* // } */}
      </div>
  );
}

export default LoginButton;
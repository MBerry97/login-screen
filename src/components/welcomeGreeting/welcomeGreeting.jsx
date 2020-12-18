import React from 'react';
import LoginText from '../loginBox/loginText/loginText';

const WelcomeGreeting = (props) => {
  return (
    <div className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText text1={props.text1} text2={props.text2} loggedIn={props.loggedIn}/>
       </div>
      </div> 
  );
}

export default WelcomeGreeting;
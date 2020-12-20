import React from 'react';
import LoginText from '../loginText/loginText.jsx';

const WelcomeGreeting = (props) => {
  return (
    <div data-testid='welcomeDiv' className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText text1={props.text1} text2={props.text2} loggedIn={props.loggedIn}/>
       </div>
      </div> 
  );
}

export default WelcomeGreeting;
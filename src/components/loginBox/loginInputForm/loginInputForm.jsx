import React from 'react';
import LoginButton from '../loginButton/loginButton';


const LoginInputForm = (props) => {
  

   const visibleAnimation = () => {
    document.getElementById('animation').style.visibility = 'visible'
    setTimeout(notVisibleAnimation, 3000) 
  }
  const notVisibleAnimation = () => {
    document.getElementById('animation').style.visibility = 'hidden'
  }


  const sendDispatch = () => {
      props.onLoginDispatch()
  }
  
const onLogin = (event) => {
    event.preventDefault()
    visibleAnimation()
    setTimeout(sendDispatch, 3000)    
  }
 

  return (
    <div>
      <form onSubmit={onLogin}>
        <label htmlFor="username">Username</label> <br></br>
        <input type="text" name='username'></input> <br></br>
        <label htmlFor="password">Password</label> <br></br>
        <input type="text" name='password'></input> <br></br>
        <span>Forgot password</span><br></br>
        <LoginButton />
      </form>
       
    </div>
  );
}

export default LoginInputForm;
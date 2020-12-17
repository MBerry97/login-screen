import React from 'react';
import LoadingAnim from '../../animations/LoadingAnim';
import LoginButton from '../loginButton/loginButton';
import './loginInputForm.css'

const LoginInputForm = (props) => {
  
  const loading = props.loading

  const sendDispatch = () => {
      props.onLoginDispatch()
  }

  const displayAnimations = () => {
    props.displayAnimations()

  }
  
const onLogin = (event) => {
    event.preventDefault()
    displayAnimations()
    setTimeout(sendDispatch, 3000)    
  }
 

  return (
    <div className='inputForm__container'>
      {loading && 
      <LoadingAnim />
       } 
      <form onSubmit={onLogin}>
        <label htmlFor="username">Username</label> <br></br>
        <input type="text" name='username' id='inputBox'></input> <br></br>
        <label htmlFor="password">Password</label> <br></br>
        <input type="text" name='password' id='inputBox'></input> <br></br>
        <span>Forgot password</span><br></br>
        <LoginButton buttonText={props.buttonText} loading={props.loading}/>
      </form>
       
    </div>
  );
}

export default LoginInputForm;
import React from 'react';
import LoginButton from '../loginButton/loginButton';


const LoginInputForm = (props) => {

  const onLogin = (event) => {
    event.preventDefault()
    console.log('hey')
    props.onLoginDispatch()
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
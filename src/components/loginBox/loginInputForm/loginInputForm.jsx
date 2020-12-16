import React from 'react';

const LoginInputForm = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label> <br></br>
        <input type="text" name='username'></input> <br></br>
        <label htmlFor="password">Password</label> <br></br>
        <input type="text" name='password'></input>
      </form>
      <span>Forgot password</span>
    </div>
  );
}

export default LoginInputForm;
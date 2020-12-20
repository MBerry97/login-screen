import React from 'react';
import './rememberPassword.css'
const RememberPassword = (props) => {
  return (
    <div data-testid='rememberPassword_div' className='rememberPassword__container'>
      <span data-testid='span'>Remember my password</span>
      <label data-testid='label' className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
       </label>
    </div>
  );
}

export default RememberPassword;
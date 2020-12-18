import React from 'react';
import './rememberPassword.css'
const RememberPassword = (props) => {
  return (
    <div className='rememberPassword__container'>
      <span>Remember my password </span>
      <label className="switch">
  <input type="checkbox" />
  <span className="slider round"></span>
       </label>
    </div>
  );
}

export default RememberPassword;
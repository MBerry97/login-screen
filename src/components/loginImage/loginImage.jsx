import React from 'react';
import image from '../../assets/login_illustration.png'
import './loginImage.css'

const LoginImage = (props) => {
  return (
     <div className='image__container'>
      <img src={image} alt='login_illustration' id='loginImage'/>
   </div>


  );
}


export default LoginImage;
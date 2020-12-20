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

  const fadeImage = () => {
    const image = document.getElementById('loginImage')
    image.classList.toggle('fade')
  }

  const changeButtonStyle = () => {
    const button = document.getElementById('loginButton')
    button.style.backgroundColor = 'rgb(247, 242, 242)';
    button.style.color  = 'rgb(118, 83, 243)';
    button.classList.toggle('noHover')
  
  }
  
const onLogin = (event) => {
    event.preventDefault()
    displayAnimations()
    changeButtonStyle()
    setTimeout(fadeImage, 2900)
    setTimeout(sendDispatch, 3000)
       
  }
 

  return (
    <div data-testid='inputForm' className='inputForm__container'>
      {loading && 
      <LoadingAnim />
       } 
      <form onSubmit={onLogin}>
        <label htmlFor="username" className='inputForm__text'>Username</label> <br></br>
        <input data-testid='inputBox' type="text" name='username' id='inputBox'></input> <br></br>
        <label htmlFor="password" className='inputForm__text'>Password</label> <br></br>
        <input data-testid='inputBox' type="text" name='password' id='inputBox'></input> <br></br>
        <span id='forgotPassword__text'>Forgot password</span><br></br>
        <LoginButton buttonText={props.buttonText} loading={props.loading}/>
      </form>
       
    </div>
  );
}

export default LoginInputForm;
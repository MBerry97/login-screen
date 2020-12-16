import React from 'react';
import './loginBox.css'
import LoginButton from './loginButton/loginButton';
import LoginInputForm from './loginInputForm/loginInputForm';
import LoginText from './loginText/loginText';
import RememberPassword from './rememberPassword/rememberPassword';
import {connect} from 'react-redux'

const LoginBox = (props) => {
  return (
    <div className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText text1={props.text1} text2={props.text2}/>
      <LoginInputForm onLoginDispatch={props.onLogin}/>
      <LoginButton />
      <RememberPassword />
    </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text1: state.loginText1,
    text2: state.loginText2
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'Logged_in'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
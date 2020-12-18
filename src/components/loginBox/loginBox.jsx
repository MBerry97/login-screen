import React from 'react';
import './loginBox.css'
import LoginInputForm from './loginInputForm/loginInputForm';
import LoginText from './loginText/loginText';
import RememberPassword from './rememberPassword/rememberPassword';
import {connect} from 'react-redux'
import WelcomeGreeting from '../welcomeGreeting/welcomeGreeting';



const LoginBox = (props) => {
  if (props.loggedIn) {
    return (
      <WelcomeGreeting text1={props.text1} text2={props.text2} />
    )
  }
  return (
    <div className='loginBox__container'>
      <div className='loginBox__centralContainer'>
      <LoginText  text1={props.text1} text2={props.text2} loggedIn = {props.loggedIn}/>
      <LoginInputForm  onLoginDispatch={props.onLogin} loggedIn={props.loggedIn} buttonText={props.loginButtonText} displayAnimations={props.onLoading} loading={props.loading}/>
      <RememberPassword  />   
    </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text1: state.loginText1,
    text2: state.loginText2,
    loggedIn: state.loggedIn,
    loginButtonText: state.loginButtonText,
    loading: state.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'Logged_in'}),
    onLoading: () => dispatch({type: 'Loading'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);
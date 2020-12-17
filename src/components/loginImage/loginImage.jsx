import React from 'react';
import image from '../../assets/login_illustration.png'
import './loginImage.css'
import {connect} from 'react-redux'

const LoginImage = (props) => {
  return (
    <div className='image__container'>
      {!props.loggedIn && 
      <img src={image} alt='login_illustration' id='loginImage'/>
        }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'Logged_in'}),
    onLoading: () => dispatch({type: 'Loading'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginImage);
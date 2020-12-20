import './loginText.css'

const LoginText = (props) => {

let text;
if (props.loggedIn) {
  text = <span data-testid='spanText2' id='login_instructions'>{props.text2}</span>
} else {
  text = <span data-testid='spanText2 'id='login_instructions'>Login with your <strong>Gamma</strong> cloud telephony account</span>
}
  return (
    <div className='loginText__container'>
      <span data-testid='spanText1' id='login_header'>{props.text1}</span> <br></br>
      {text}
    </div>
  );
}

export default LoginText;
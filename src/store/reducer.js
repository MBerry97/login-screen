const initialState = {
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Login'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Logged_in': 
    return {
      loginText1: 'You are now logged in',
      loginText2: 'Great stuff',
      loggedIn: true,
      loginButtonText: 'Logging in'
    };
    case 'Loading': 
    return {
      ...state,
      loginButtonText: 'Logging in'
    };
    default:
     return state
  }
  
}

export default reducer;
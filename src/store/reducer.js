const initialState = {
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Login',
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Logged_in': 
    return {
      ...state,
      loginText1: 'You are now logged in',
      loginText2: 'Great stuff',
      loggedIn: true,
    };
    case 'Loading': 
    return {
      ...state,
      loginButtonText: 'Logging in',
      loading: true,
    };
    default:
     return state
  }
  
}

export default reducer;
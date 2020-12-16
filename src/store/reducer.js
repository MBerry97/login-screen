const initialState = {
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Logged_in': 
    return {
      loginText1: 'You are now logged in',
      loginText2: 'Great stuff'
    };
    default:
     return state
  }
  
}

export default reducer;
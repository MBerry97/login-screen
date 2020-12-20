import reducer from './reducer'

describe('Reducer', () => {
  it('Returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Login',
  loading: false
})
  });
  it('Should store login text upon login', () => {
    expect(reducer({
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Login',
  loading: false
}, {type: 'Logged_in'})).toEqual({
  loginText1: 'You are now logged in',
  loginText2: 'Great stuff',
  loggedIn: true,
  loginButtonText: 'Login',
  loading: false
})
  });
  it('Login text should change whilst logging in', () => {
    expect(reducer({
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Login',
  loading: false
}, {type: 'Loading'})).toEqual({
  loginText1: 'LOGIN',
  loginText2: 'Login with your Gamma cloud telephony account.',
  loggedIn: false,
  loginButtonText: 'Logging in',
  loading: true,
})
  });
  
});
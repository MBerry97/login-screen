import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup, fireEvent, waitFor, waitForElement, getByText} from '@testing-library/react'
import '@testing-library/jest-dom';
import { createStore } from 'redux'
import reducer from '../../../store/reducer'
import LoginText from './loginText';
import LoginButton from '../loginButton/loginButton'

const store = createStore(reducer)
const state = store.getState()

afterEach(cleanup)

describe('<LoginText />', () => {
  it('renders without crashing', () => {
      render(<Provider store={store}><LoginText /></Provider>)
  });
  it('renders with the correct text', () => {
      const {getByTestId} = render(<Provider store={store}><LoginText text1={state.loginText1}/></Provider>)
      expect(getByTestId('spanText1')).toHaveTextContent('LOGIN')
      expect(getByTestId('spanText2')).toHaveTextContent('Login with your Gamma cloud telephony account')
  });
//   it('renders with the correct text when loggedIn', () => {
//       const {getByTestId, getAllByText} = render(<Provider store={store}><LoginText loggedIn={true} /><LoginButton /></Provider>)
//       const loginButton = getByTestId('loginButton')
//       fireEvent.click(loginButton)
   
          
      
//         // setTimeout(expect(getByTestId('spanText1')).toHaveTextContent('You are now logged in'), 4000)
// // expect(getByTestId('spanText1')).toHaveTextContent('You are now logged in')
//     //    expect(getByTestId('spanText1')).toHaveTextContent('You are now logged in')
//     //    expect(getByTestId('spanText2')).toHaveTextContent('Great Stuff')
      
      
      
//   });
});
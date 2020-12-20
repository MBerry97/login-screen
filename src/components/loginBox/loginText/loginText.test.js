import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup, fireEvent, waitFor, waitForElement, getByText} from '@testing-library/react'
import '@testing-library/jest-dom';
import { createStore } from 'redux'
import reducer from '../../../store/reducer'
import LoginText from './loginText';


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
});
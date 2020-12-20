import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import LoginInputForm from '../loginInputForm/loginInputForm'
import { createStore } from 'redux'
import reducer from '../../../store/reducer'


const store = createStore(reducer)
const state = store.getState()

afterEach(cleanup)

function renderWithRedux(component, {initialState, store = createStore(reducer, initialState) } = {} )
  {
return {...render(<Provider store={store}>{component}</Provider>)}
  
}

describe('<LoginInputForm />', () => {
  it('renders with the correct text content', () => {
      const {getByTestId, getByText} = renderWithRedux(<LoginInputForm/>)
      const usernameText = getByText('Username')
      const passwordText = getByText('Password')
      const forgotPasswordText = getByText('Forgot password')
      expect(usernameText).toHaveTextContent('Username')
      expect(passwordText).toHaveTextContent('Password')
      expect(forgotPasswordText).toHaveTextContent('Forgot password')
      
  });
  it('renders the loading animation when login is click (loading = true)', () => {
      const {getByTestId} = renderWithRedux(<LoginInputForm loading={true}/>)
      const jumpingDots = (getByTestId('loadingAnim'))
  });
  it('renders the input boxes and loginButton', () => {
      const {getByTestId, getAllByTestId} = renderWithRedux(<LoginInputForm />)
      const inputBox = (getAllByTestId('inputBox'))
      const loginButton = getByTestId('loginButton')
      const inputForm = getByTestId('inputForm')
      expect(inputBox).toHaveLength(2)
      expect(inputForm).toContainElement(loginButton)
  });
  });
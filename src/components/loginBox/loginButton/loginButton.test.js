import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import LoginButton from '../loginButton/loginButton'
import { createStore } from 'redux'
import reducer from '../../../store/reducer'


const store = createStore(reducer)
const state = store.getState()

afterEach(cleanup)

function renderWithRedux(component, {initialState, store = createStore(reducer, initialState) } = {} )
  {
return {...render(<Provider store={store}>{component}</Provider>)}
  
}

describe('<LoginButton />', () => {
  it('renders with the correct content', () => {
      const {getByTestId} = renderWithRedux(<LoginButton buttonText={state.loginButtonText}/>)
      const loginButton = (getByTestId('loginButton'))
      expect(loginButton).toHaveTextContent('Login')
  });
  it('renders the jumping dots animation when login is click (loading = true)', () => {
      const {getByTestId} = renderWithRedux(<LoginButton buttonText={state.loginButtonText} loading={true}/>)
      const jumpingDots = (getByTestId('jumpingDots'))
  });
  });
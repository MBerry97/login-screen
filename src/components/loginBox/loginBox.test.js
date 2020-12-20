import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import LoginBox from './loginBox'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import { createStore } from 'redux'
import reducer from '../../store/reducer'

const store = createStore(reducer)
const state = store.getState()

afterEach(cleanup)

describe('<LoginBox />', () => {
  it('renders without crashing', () => {
      const {getByTestId } = render(<Provider store={store}><LoginBox/></Provider>)
  });
  it('renders the correct elements', () => {
      const { getByTestId } = render(<Provider store={store}><LoginBox/></Provider>)
      const loginBox = getByTestId('loginBox')
      expect(loginBox.childElementCount).toBe(3)
  });
  
  
});
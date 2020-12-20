import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import LoginBox from './loginBox'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import { createStore } from 'redux'
import reducer from '../../store/reducer'

const store = createStore(reducer)
afterEach(cleanup)

describe('<LoginBox />', () => {
  it('renders without crashing', () => {
      render(<Provider store={store}><LoginBox></LoginBox></Provider>)
  });
  it('renders without crashing', () => {
      render(<Provider store={store}><LoginBox></LoginBox></Provider>)
  });
});
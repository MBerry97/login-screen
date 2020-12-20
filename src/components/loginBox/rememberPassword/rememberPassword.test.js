import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import { createStore } from 'redux'
import reducer from '../../../store/reducer'
import RememberPassword from './rememberPassword'

const store = createStore(reducer)
afterEach(cleanup)

describe('<RememberPassword />', () => {
  it('renders without crashing', () => {
      render(<Provider store={store}><RememberPassword /></Provider>)
  });
  it('renders with the correct text', () => {
      const {getByTestId} = render(<Provider store={store}><RememberPassword /></Provider>)
      expect(getByTestId('span')).toHaveTextContent('Remember my password')
  });
});
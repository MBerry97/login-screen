import react from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom';
import RememberPassword from './rememberPassword'

afterEach(cleanup)

describe('<RememberPassword />', () => {
  it('renders without crashing', () => {
      render(<RememberPassword />)
  });
  it('renders with the correct contents', () => {
      const {getByTestId} = render(<RememberPassword />)
      expect(getByTestId('span')).toHaveTextContent('Remember my password')
      const label = getByTestId('label')
      expect(getByTestId('rememberPassword_div')).toContainElement(label)
  });
});
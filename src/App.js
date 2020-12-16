
import './App.css';
import LoginBox from './components/loginBox/loginBox';
import {Router} from '@reach/router'

const App = () => {
  return (
    <div className="App">
      <Router >
      <LoginBox path='/'/>
      
      </Router>
    </div>
  );
}

export default App;

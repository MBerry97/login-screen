
import './App.css';
import LoginBox from './components/loginBox/loginBox';
import {Router} from '@reach/router'
import LoginImage from './components/loginImage/loginImage'

const App = () => {
  return (
    <div className="App">
      <LoginImage />
      <LoginBox />
      
    </div>
  );
}

export default App;

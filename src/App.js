
import './App.css';
import LoginImage from './components/loginImage/loginImage';
import LoginBox from './components/loginBox/loginBox';
import {Spring} from 'react-spring/renderprops'

const App = () => {
  return (
    <div className="App">
      <LoginImage />
      
      <LoginBox />
      
      
    </div>
  );
}

export default App;

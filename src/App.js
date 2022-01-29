import logo from './logo.svg';
import './App.css';
import { Message } from './components';

const myText = "Lesson - 1:  Props + scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={myText} />
      </header>
    </div>
  );
}

export default App;

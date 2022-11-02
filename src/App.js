import logo from './logo.svg';
import profile from './myFace.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          테스트용 앱 이에요! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://studyuntildie.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          정연 블로그
        </a>
      </header>
    </div>
  );
}

export default App;

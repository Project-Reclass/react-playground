import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://picsum.photos/400"/>
        <p>
          Welcome to React Playground! <br></br>
          Click to join your workspace
        </p>

        <ul>
          <li><a className="App-link" href="#">Sammy</a></li>
          <li><a className="App-link" href="#">Steven</a></li>
          <li><a className="App-link" href="#">Yi</a></li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          React Documentation
        </a>
      </header>
    </div>
  );
}

export default App;

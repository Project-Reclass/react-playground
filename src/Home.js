import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <img src="https://picsum.photos/400" alt="random picsum"/>
        <p className="Welcome">
            Welcome to React Playground
            <br></br>
            Click to join your workspace!
        </p>
        <ul className="Links">
            <Link to='/sammy'>
                <li className="App-link">Sammy</li>
            </Link>
            <Link to='/steven'>
                <li className="App-link">Steven</li>
            </Link>
            <Link to='/yi'>
                <li className="App-link">Yi</li>
            </Link>
        </ul>
        <div class="Footer">
          <Link to="/faq">
            FAQ
          </Link>
          <a className="Footer-link" href="https://reactjs.org">
            React Documentation
          </a>
        </div>
      </header>
    </div>
  );
}

export default Home;

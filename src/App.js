import { useNewTimer } from 'react';
import './App.css';

function App() {

  const timer = useNewTimer(new Date());

  return (
    <div className="App">
      <header className="App-header">
      <h2>It is {timer.toLocaleTimeString()}.</h2>
        <a
          className="App-link"
          href="https://github.com/D7K7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Now back to my Github.
        </a>
      </header>
    </div>
  );
}

export default App;

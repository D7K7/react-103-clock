import { useState, useEffect } from 'react';
import './App.css';

function Clock(props) {

  const [date, setDate] = useState(new Date());

 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

  return (
    <div className="App">
      <header className="App-header">
      <h1>
      The time is {date.toLocaleTimeString()}
      </h1>
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

export default Clock;

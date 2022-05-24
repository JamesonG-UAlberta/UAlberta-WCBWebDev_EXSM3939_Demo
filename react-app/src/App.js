import logo from './logo.svg';
import './App.css';

// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {
  // We can declare variables, use methods, etc just like JavaScript.
  let myName = "Bob";
  // Delimit our returned JSX with parentheses:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        {/*
        You have to mark a JavaScript area with braces in order to use JS comments. HTML comments won't work properly in JSX.
         
        Below, I added a paragraph element with a "Hello, World"-like statement, subbing in the name decalred on line 7.
        */}
        <p>Hello, {myName}!</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;

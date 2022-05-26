import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyComponentFunctional from './MyComponentFunctional';
import MyComponentClassBased from './MyComponentClassBased';
import StopwatchFunctional from './StopwatchFunctional';
import StopwatchClassBased from './StopwatchClassBased';
import ColourThingy from './ColourThingy';
import ToDo from './ToDo';

// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {
  // In functional syntax, the below terms represent (in order): The name of the state property (testState), the method to change the state property (setTestState), the method call that incorporates it into state (useState), and the value that it will be initialized to (false).
  const [testState, setTestState] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
      </header>
      <div className='flex'>
        <MyComponentFunctional />
        <MyComponentClassBased />
      </div>
      <div className='flex'>
        <StopwatchFunctional />
        <StopwatchClassBased start="61" />
        <StopwatchClassBased start="4623" />
      </div>
      <ColourThingy />
      <ToDo />
      <footer>
        <p>Thank you, come again.</p>
      </footer>
    </div>
  );
}


export default App;

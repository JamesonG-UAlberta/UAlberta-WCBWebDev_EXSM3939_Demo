import logo from './logo.svg';
import './App.css';
import InvertingButton from './InvertingButton';
import AddingMachine from './AddingMachine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercises</h1>
      </header>
      <fieldset>
        <legend>Exercise 01</legend>
        <InvertingButton />
      </fieldset>
      <fieldset>
        <legend>Exercise 02</legend>
        <AddingMachine />
      </fieldset>
      <fieldset>
        <legend>Exercise 03</legend>
        <p>To-Do</p>
      </fieldset>
      <fieldset>
        <legend>Exercise 04</legend>
        <p>To-Do</p>
      </fieldset>
      <fieldset>
        <legend>Exercise 05</legend>
        <p>To-Do</p>
      </fieldset>
    </div>
  );
}

export default App;

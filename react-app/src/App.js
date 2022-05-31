import logo from './logo.svg';
import './App.css';
import InvertingButton from './InvertingButton';
import AddingMachine from './AddingMachine';
import GreetUser from './GreetUser';
import MadLib from './MadLib';
import GradeChart from './GradeChart';

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
        <GreetUser name="James" />
        <GreetUser name="Bob" />
        <GreetUser name="Joe" />
      </fieldset>
      <fieldset>
        <legend>Exercise 04</legend>
        <MadLib name="Jane" place="Edmonton" food="soup" verb="running" feeling="sad" />
      </fieldset>
      <fieldset>
        <legend>Exercise 05</legend>
        <GradeChart />
      </fieldset>
    </div>
  );
}

export default App;

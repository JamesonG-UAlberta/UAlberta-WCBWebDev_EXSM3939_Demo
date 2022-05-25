import logo from './logo.svg';
import './App.css';


// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {


  // Delimit our returned JSX with parentheses:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
      </header>
      <main>
        <h2>Here's some stuff!</h2>
      </main>
      <footer>
        <p>Thank you, come again.</p>
      </footer>
    </div>
  );
}

export default App;

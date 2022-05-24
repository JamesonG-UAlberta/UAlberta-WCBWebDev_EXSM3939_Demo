import logo from './logo.svg';
import './App.css';

// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {
  // Declare some data with which to render a table.
  const myData = [
    {
      name: "Joe",
      age: 20,
      occupation: "Professional Athlete",
      salary: 70000
    },
    {
      name: "Bob",
      age: 25,
      occupation: "Secretary",
      salary: 55000
    },
    {
      name: "Sue",
      age: 28,
      occupation: "Software Developer",
      salary: 90000
    },
    {
      name: "Jane",
      age: 32,
      occupation: "Car Salesperson",
      salary: 75000
    },
    {
      name: "Billy",
      age: 37,
      occupation: "Actor",
      salary: 125000
    }
  ];

  // This flag will determine whether we show salaries or not.
  var admin = false;

  // Delimit our returned JSX with parentheses:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
      </header>
      <main>
        <h2>Here's some stuff!</h2>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            {/* Only show the heading for salary if we're showing the column. */}
            {admin?<th>Salary</th>:""}
          </tr>
        </thead>
        <tbody>
        {/* Render the table and populate all of the fields using the data from the array (ignoring salary if the admin flag is false). */}
        {myData.map(x => <tr><td>{x.name}</td><td>{x.age}</td><td>{x.occupation}</td>{admin?<td>{x.salary}</td>:""}</tr>)}
        </tbody>
        </table>
      </main>
      <footer>
        <p>Thank you, come again.</p>
      </footer>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

const SPACE_ID = "j6zm7o6y974w";
const ACCESS_TOKEN = " 63jHrxO7iujkfejFc86ScaF8Pi94jgFkv_A_eqmxLLw";

async function fetchData() {
  const response = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master",
  );
  const body = await response.json();
  console.log(body);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

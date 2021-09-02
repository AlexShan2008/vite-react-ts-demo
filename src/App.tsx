import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Demo } from "./demo";
// import BeautifulDnd from "./react-beautiful-dnd/demo";
// import { colors } from "@atlaskit/theme";
import { Example } from "./react-beautiful-dnd/example";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "@components/shared/header/header.component";

function App() {
  const [count, setCount] = useState(0);

  const a = "";

  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/example">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <Demo /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <h2>
      <Example />
    </h2>
  );
}

function Users() {
  return <h2>Users</h2>;
}

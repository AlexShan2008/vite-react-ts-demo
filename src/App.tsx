import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "@components/shared/header/header.component";

const mode = import.meta.env.DEV;

console.log(mode, "mode");

function App() {
  const [count, setCount] = useState(0);

  const a = "";

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
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
    </div>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

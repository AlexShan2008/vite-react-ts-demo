import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from "@components/header/header.component";
import GlobalStyle from "@theme/global-styles";
import horseUrl from "@assets/images/horse.png";

const mode = import.meta.env.VITE_APP_ENV;

console.log(mode, "mode");

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/about">
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
  return (
    <>
      <h2>About</h2>
      <img
        style={{
          maxWidth: "100%",
        }}
        src={horseUrl}
        alt="horse"
      />
    </>
  );
}

function Users() {
  return <h2>Users</h2>;
}

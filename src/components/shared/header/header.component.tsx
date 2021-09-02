import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "@assets/images/logo.svg";

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} className="App-logo" alt="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

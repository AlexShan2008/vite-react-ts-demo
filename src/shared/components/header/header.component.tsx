import { Link } from "react-router-dom";
import logo from "@assets/images/logo.svg";
import { HeaderWrapper } from "./header.styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

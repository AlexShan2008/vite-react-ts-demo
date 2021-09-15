import { Link } from "react-router-dom";
import { useLocation } from "react-use";

import logo from "@assets/images/logo.svg";
import { HeaderWrapper } from "./header.styled";
import { useCallback } from "react";

export const Header = () => {
  const state = useLocation();

  const getClassName = useCallback(
    (path: string) => {
      return state.pathname === path ? "active" : undefined;
    },
    [state.pathname]
  );

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li className={getClassName("/")}>
            <Link to="/">Home</Link>
          </li>
          <li className={getClassName("/about")}>
            <Link to="/about">About</Link>
          </li>
          <li className={getClassName("/users")}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

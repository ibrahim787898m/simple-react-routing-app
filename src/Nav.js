import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <>
      <nav>
        <Link className="logo" to="/">
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
          <Link className="link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

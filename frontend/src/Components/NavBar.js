import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <div>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/articles-list">articles</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

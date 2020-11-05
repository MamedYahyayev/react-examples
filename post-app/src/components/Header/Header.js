import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <h1>Medium</h1>
          <p>155 followers</p>
          <div className="header__left-links">
            <a id="about" href="#a">
              About
            </a>
            <a id="follow" href="#a">
              Follow
            </a>
          </div>
        </div>
        <div className="header__right">
          <FaSearch />
          <button>Upgrade</button>
          <div>LOGO</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;

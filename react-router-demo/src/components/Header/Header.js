import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header ">
      <div className="header__logo">
        <h1>Logo</h1>
      </div>
      <div className="header__search">
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h1>MEDIUM</h1>
      </div>
      <div className="footer__right">
        <a href="/about">About</a>
        <a href="/about">Help</a>
        <a href="/about">Legal</a>
      </div>
    </div>
  );
};

export default Footer;

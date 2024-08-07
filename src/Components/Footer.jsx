import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="row footer__row">
        <img
          height={50}
          src={logo}
          className="nav__logo pointer"
          onClick={() => navigate("/")}
        />
        {/* <h1 className="footer__logo">OMDb Lookup</h1>
        <ul className="footer__links">
          <a href="#" className="footer__link">
            <li className="footer__li">Home</li>
          </a>
          <a href="#" className="footer__link">
            <li className="footer__li">About</li>
          </a>
          <a href="#" className="footer__link">
            <li className="footer__li">Contact</li>
          </a>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;

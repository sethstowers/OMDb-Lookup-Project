import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="row">
          <div className="nav__container">
            <img
              height={50}
              src={logo}
              className="nav__logo pointer"
              onClick={() => navigate("/")}
            />

            {/* <h1 className="nav__logo pointer" onClick={() => navigate('/')}>OMDb Lookup</h1> */}
            {/* <ul className="nav__links">
            <a href="#" className="nav__link"><li className="nav__li">Home</li></a>
            <a href="#" className="nav__link"><li className="nav__li">About</li></a>
            <a href="#" className="nav__link"><li className="nav__li">Contact</li></a>
          </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

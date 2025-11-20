import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Asset/image/logo-Anton.jpg";

const Navigation = () => {
  return (
    <div>
      <div className="logoanton">
        <NavLink className="navbar-brand logo" to="/">
          <img src={logo} alt="logo anton" />
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}

          {/* Bouton mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navbar-menu">
              <li className="nav-item">
                <NavLink
                  to="/Apropos"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-bold" : "")
                  }
                >
                  ANTONS ART
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Apropos"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-bold" : "")
                  }
                >
                  ANTONS SOCIAL
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-bold" : "")
                  }
                >
                  CONTACT ANTON
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          Anton
        </NavLink>
      <div className="container">


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
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                Antons Art
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Apropos"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                Antons social
              </NavLink>
            </li>

    

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active fw-bold" : "")
                }
              >
                Contact Anton
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

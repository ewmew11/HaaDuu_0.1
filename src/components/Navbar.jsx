import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand justify-content-center fixed-bottom navbar-light">
        <div>
          <ul className="navbar-nav font-link">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <a class="text-muted font-weight-bold font-link">Sun</a>
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <a class="text-muted font-weight-bold font-link">Mercury</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <a class="text-muted font-weight-bold font-link">Venus</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/earth">
                <a class="text-muted font-weight-bold font-link">Earth</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/map">
                <a class="text-muted font-weight-bold font-link">
                  Map In Earth
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/city">
                <a class="text-muted font-weight-bold font-link">
                  City In Earth
                </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/earth">
                <a class="text-muted font-weight-bold font-link">Earth</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                <a class="text-muted font-weight-bold font-link">Jupiter</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                <a class="text-muted font-weight-bold font-link">Saturn</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                <a class="text-muted font-weight-bold font-link">Uranus</a>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                <a class="text-muted font-weight-bold font-link">Neptune</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

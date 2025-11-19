import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {

    
  return (
    <nav className="navbar navbar-expand-lg nav-custom fixed-top shadow-sm">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img 
            src={logo}
            alt="ZEPFTER" 
            height="40" 
            className="me-2"
          />
          <span className="brand-text">ZEPFTER</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>

              <ul className="dropdown-menu shadow dropdown-menu-end">

                <li><h6 className="dropdown-header">Medical Courses</h6></li>
                <li><Link className="dropdown-item" to="/services">Medical Coding</Link></li>
                <li><Link className="dropdown-item" to="/services">Medical Billing</Link></li>
                <li><Link className="dropdown-item" to="/services">Medical Writing</Link></li>

                <li><hr className="dropdown-divider" /></li>

                <li><h6 className="dropdown-header">Clinical Courses</h6></li>
                <li><Link className="dropdown-item" to="/services">Clinical Research</Link></li>
                <li><Link className="dropdown-item" to="/services">Clinical Trials</Link></li>
                <li><Link className="dropdown-item" to="/services">Clinical Data Management</Link></li>

                <li><hr className="dropdown-divider" /></li>

                <li><h6 className="dropdown-header">IT & Technology</h6></li>
                <li><Link className="dropdown-item" to="/services">Data Science</Link></li>
                <li><Link className="dropdown-item" to="/services">AI & Machine Learning</Link></li>
                <li><Link className="dropdown-item" to="/services">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/services">Python</Link></li>

              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;

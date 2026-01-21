import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active-nav" : "nav-link text-white";

  const location = useLocation();

  const isPagesActive =
  location.pathname === "/ourservice" ||
  location.pathname === "/testimonial";


  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div className="container-fluid px-3 d-flex align-items-center mx-5 my-2">

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          <i
            className={`bi ${
              isOpen ? "bi-x-lg" : "bi-list"
            } fs-1 text-warning`}
          ></i>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto text-center">

            <li className="nav-item">
              <NavLink end to="/" onClick={closeMenu} className={navClass}>
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/About" onClick={closeMenu} className={navClass}>
                ABOUT US
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Menu" onClick={closeMenu} className={navClass}>
                MENU & PRICING
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Masterchefs" onClick={closeMenu} className={navClass}>
                MASTERCHEFS
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span
                className={`nav-link dropdown-toggle ${
                  isPagesActive ? "active-nav" : "text-white"
                }`}
                role="button"
                data-bs-toggle="dropdown"
              >
                PAGES
              </span>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to="/ourservice"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    OUR SERVICE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testimonial"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    TESTIMONIAL
                  </NavLink>
                </li>
              </ul>
            </li>


            <li className="nav-item">
              <NavLink to="/Contact" onClick={closeMenu} className={navClass}>
                CONTACT US
              </NavLink>
            </li>

          </ul>
        </div>

        {/* ICONS */}
        <div className="nav-icons d-flex align-items-center gap-3">

          <NavLink to="/cart" className="cart position-relative text-white">
            <i className="bi bi-cart fs-5"></i>
            {cartCount > 0 && (
              <span className="badge position-absolute top-0 start-100 translate-middle rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/wishlist" className="wishlist text-white">
            <i className="bi bi-heart-fill fs-5"></i>
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

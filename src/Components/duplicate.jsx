import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import logo from '../assets/img/apple-icon.png';
import img from '../assets/img/online-shopping.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

const Header = () => {
  return (
    <>
      {/* Top Header */}
      <section className="header1  text-light py-1">
        <nav className="navbar container d-flex justify-content-between">
          <ul className="navlinks d-flex list-unstyled mb-0">
            <li className="me-3">
              <i className="bi bi-envelope-fill" style={{ fontSize: "15px" }}> info@company.com</i>
            </li>
            <li style={{fontSize: "15px"}}>
              <i className=" itt bi bi-telephone-fill" style={{ fontSize: "15px" }}> </i> 010-020-0340
            </li>
          </ul>

          <ul className="icons d-flex list-unstyled mb-0">
            <li className="mx-2">
              <a href="https://facebook.com/templatemo" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px" }}>
             <FaFacebook className="facebook-icon"/>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px" }}>
                <FaTwitter className="twitter-icon"/>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px" }}>
               
               <i className="bi bi-instagram instagram-icon"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "20px" }}>
                <FaLinkedin className="linkedin-icon"/>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section id="header" className="bg-light py-2">
        <nav className="navbar container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="img my-2" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="icon d-flex list-unstyled mb-0">
            <li className="mx-2"><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
            <li className="mx-2"><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
            <li className="mx-2"><Link to="/shop" className="text-decoration-none text-dark">Shop</Link></li>
            <li className="mx-2"><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
          </ul>

          {/* Search / Cart / User Icons */}
          <ul className="iconss d-flex list-unstyled mb-0">
            <li className="mx-2"><i className="bi bi-search"></i></li>
            <li className="mx-2"><Link  to='/cart'><img src={img} alt="cart" className="imgg" /></Link></li>
            <li className="mx-2"><i className="bi bi-person-fill"></i></li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
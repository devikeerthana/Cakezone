import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>
      <section className='footer mt-5'>
        <div className='container-fluid px-0'>
          <div className='row m-0'>

            {/* 🔥 FIX: mt-5 added (alignment correct) */}
            <div className='col-lg-3 col-md-6 col-sm-7 col-12 mt-5'>
              <div className='footer-box orange-box text-white'>
                <i className="bi bi-cake2 fs-1"></i>
                <h2 className='cakezone-box text-white'>CAKEZONE</h2>
                <p className='para3'>
                  Lorem diam sit erat dolor elitr et, diam lorem
                  justo labore amet clita labore stet eos magna sit.
                  Elitr dolor eirmod duo tempor lorem, elitr clita ipsum sea.
                  Nonumy rebum et takimata ea takimata amet gubergren,
                  erat rebum magna lorem stet eos.
                  Diam amet et kasd eos duo dolore no.
                </p>
              </div>
            </div>

            <div className='text-white col-lg-3 col-md-6 col-sm-7 col-12 mt-5'>
              <h5 className='fw-bold text-uppercase mb-3'>Get in touch</h5>
              <p><i className='bi bi-geo-alt'></i> 123 Street, New York</p>
              <p><i className='bi bi-envelope'></i> info@example.com</p>
              <p><i className='bi bi-telephone'></i> +012 345 67890</p>

              <div className="social-icons mt-3">
                <Link to="#"><i className="bi bi-twitter"></i></Link>
                <Link to="#"><i className="bi bi-facebook"></i></Link>
                <Link to="#"><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>

            <div className="text-white col-lg-3 col-md-6 col-sm-7 col-12 mt-5">
              <h5 className="fw-bold text-uppercase mb-3">Quick Links</h5>
              <ul className="links list-unstyled">
                <li><Link to="/"><i className="bi bi-arrow-right me-2"></i>Home</Link></li>
                <li><Link to="/about"><i className="bi bi-arrow-right me-2"></i>About Us</Link></li>
                <li><Link to="/menu"><i className="bi bi-arrow-right me-2"></i>Menu & Pricing</Link></li>
                <li><Link to="/masterchefs"><i className="bi bi-arrow-right me-2"></i>Masterchefs</Link></li>
                <li><Link to="/ourservice"><i className="bi bi-arrow-right me-2"></i>Our Service</Link></li>
                <li><Link to="/testimonial"><i className="bi bi-arrow-right me-2"></i>Testimonial</Link></li>
                <li><Link to="/contact"><i className="bi bi-arrow-right me-2"></i>Contact Us</Link></li>
              </ul>
            </div>

            <div className="text-white col-lg-3 col-md-6 col-sm-7 col-12 mt-5">
              <h5 className="fw-bold text-uppercase mb-3">Newsletter</h5>
              <p>Amet justo diam dolor rebmu lorem sit stet sea justo kasd</p>
              <div className="newsletter-input d-flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                />
                <button className="signup text-white">Sign Up</button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Footer;

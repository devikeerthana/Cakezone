import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Style.css";

const Topbar = () => {

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        document.body.classList.add("hide-topbar");
      } else {
        document.body.classList.remove("hide-topbar");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="topbar">
      <div className="container-fluid px-0">
        <div className="row gx-0 align-items-center">

          <div className="col-lg-4 py-3 text-center text-lg-start ps-lg-4">
            <div className="d-inline-flex align-items-center">
              <i className="icons bi bi-envelope fs-4 me-3"></i>
              <div>
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 py-3 text-center cakezone">
            <h1 className="m-0 text-uppercase text-light">
              <i className="icons1 bi bi-cake me-2"></i>
              CakeZone
            </h1>
          </div>

          <div className="col-lg-4 py-3 text-center text-lg-end pe-lg-4">
            <div className="d-inline-flex align-items-center">
              <i className="icons bi bi-telephone fs-4 me-3"></i>
              <div>
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topbar;

import React from 'react'
import './OurService.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const OurService = () => {
  return (
    <>
      {/* TITLE SECTION */}
      <section className='master text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 my-5'>
              <h1>SERVICES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      {/* SERVICE CARDS */}
<section className="master2 text-center py-5">
  <div className="container">
    <div className="row justify-content-center gy-4">

      {/* CARD 1 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div className="master-box">
          <h4 className="bday-cake text-black text-center px-3 py-2">
            BIRTHDAY CAKE
          </h4>
          <p className="box-para1 text-white">
            Ipsum ipsum clita erat amet dolor sit justo sea
            eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum
          </p>
          <Link to="#" className="text-black">
            <i className="bi bi-arrow-right me-2"></i>Read More
          </Link>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div className="master-box">
          <h4 className="bday-cake text-black text-center px-3 py-2">
            BIRTHDAY CAKE
          </h4>
          <p className="box-para1 text-white">
            Ipsum ipsum clita erat amet dolor sit justo sea
            eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum
          </p>
          <Link to="#" className="text-black">
            <i className="bi bi-arrow-right me-2"></i>Read More
          </Link>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div className="master-box">
          <h4 className="bday-cake text-black text-center px-3 py-2">
            BIRTHDAY CAKE
          </h4>
          <p className="box-para1 text-white">
            Ipsum ipsum clita erat amet dolor sit justo sea
            eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum
          </p>
          <Link to="#" className="text-black">
            <i className="bi bi-arrow-right me-2"></i>Read More
          </Link>
        </div>
      </div>

      {/* DISCOUNT */}
      <div className="col-12 text-center mt-4">
        <h1 className="discount text-white mb-3">
          30% DISCOUNT FOR THIS SUMMER
        </h1>
        <button className="order-btn mx-1 my-2 text-white">
          ORDER NOW
        </button>
      </div>

    </div>
  </div>
</section>


    </>
  )
}

export default OurService

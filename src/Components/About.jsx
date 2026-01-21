import React from 'react'
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import aboutimage from "../assets/about.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CountUp from 'react-countup';


const About = () => {
  const statsData = [
    { icon: 'bi-star', label: 'OUR EXPERIENCE', value: 12745 },
    { icon: 'bi-people', label: 'CAKE SPECIALIST', value: 13345 },
    { icon: 'bi-check2-square', label: 'COMPLETE PROJECT', value: 11345 },
    { icon: 'bi-cup-hot', label: 'HAPPY CLIENTS', value: 14455 },
  ];
  return (
    <>
      <section className='about text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='about1 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h4>about us</h4>
              <h1>WELCOME TO CAKEZONE</h1>
              <div className='title-underline'>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='about2'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={aboutimage} alt="Delicious Cake" className='img-fluid' />
            </div>

            <div className='col-lg-6 col-md-6 col-sm-12'>
              <p className='para1'>
                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo.
              </p>

              <p className='para2'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit.
                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna.
              </p>

              <div className='row'>
                <div className='col-md-6'>
                  <div className='features'>
                    <div className='icon-box'>
                      <i className='bi bi-heart-pulse'></i>
                    </div>
                    <h5>100% HEALTHY</h5>
                    <p className='para2'>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='features'>
                    <div className='icon-box'>
                      <i className='bi bi-award'></i>
                    </div>
                    <h5>AWARD WINNING</h5>
                    <p className='para2'>Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about3'>
        <div className='stats-section text-center py-5'>
          <div className='container'>
            <div className='row'>
              {statsData.map((item, index) => (
                <div key={index} className='col-lg-3 col-md-6 mb-4'>
                  <div className='stat-box'>
                    <div className='icon-box'>
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h6>{item.label}</h6>
                    <h2>
                      <CountUp start={0} end={item.value} duration={8.5} />
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      

    </>
  )
}

export default About

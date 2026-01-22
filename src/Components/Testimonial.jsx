import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../assets/testimonial-1.jpg';
import test2 from '../assets/testimonial-2.jpg';
import test3 from '../assets/testimonial-3.jpg';
import test4 from '../assets/testimonial-4.jpg';

const Testimonial = () => {
  const testimonials = [
    { image: test1, name: 'John Doe', profession: 'Web Developer', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.' },
    { image: test2, name: 'Micheal Lee', profession: 'Designer', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.' },
    { image: test3, name: 'Sarah Paul', profession: 'Manager', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.' },
    { image: test4, name: 'Jemima', profession: 'Cricketer', text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.' }
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,       // Desktop
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,    // Mobile: 1 card
          centerMode: true,
          centerPadding: "0px",
          autoplay: true,
          dots: true,
        }
      }
    ]
  };

  return (
    <>
      <section className='test text-center'>
        <div className='container'>
          <h1>TESTIMONIAL</h1>
        </div>
      </section>

      <section className='test1 text-center'>
        <div className='container'>
          <h4>Testimonial</h4>
          <h1>OUR CLIENTS SAY!!!</h1>
          <div className='title-underline'>
            <span></span>
          </div>
        </div>
      </section>

      <div className='container py-5'>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className='testimonial-card'>
              <div className='testimonial-inner'>
                <img src={t.image} alt={t.name} className='client-img' />
                <h4 className='client-name'>{t.name}</h4>
                <h5 className='client-profession'>{t.profession}</h5>
                <p className='client-text'>{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;

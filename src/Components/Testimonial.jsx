import React from 'react'
import './Testimonial.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import test1 from '../assets/testimonial-1.jpg'
import test2 from '../assets/testimonial-2.jpg'
import test3 from '../assets/testimonial-3.jpg'
import test4 from '../assets/testimonial-4.jpg'


const Testimonial = () => {
  const testimonials = [
    {
      image: test1,
      name: 'John Doe',
      profession: 'Web Developer',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.'
    },
    {
      image: test2,
      name: 'Micheal Lee',
      profession: 'Designer',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.'
    },
    {
      image: test3,
      name: 'Sarah Paul',
      profession: 'Manager',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.'
    },
    {
      image: test4,
      name: 'Jemima',
      profession: 'Cricketer',
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,   
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      <section className='test text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h1>TESTIMONIAL</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='test1 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h4>Testimonial</h4>
              <h1>OUR CLIENTS SAY!!!</h1>
              <div className='title-underline'>
                <span></span>
              </div>
            </div>
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
  )
}

export default Testimonial

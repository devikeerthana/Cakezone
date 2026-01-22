import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "./CartContext";
import { WishlistContext } from "./WishlistContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Menu.css";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import aboutimage from "../assets/about.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import CountUp from 'react-countup';
import chef1 from '../assets/team-1.jpg'
import chef2 from '../assets/team-2.jpg'
import chef3 from '../assets/team-3.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import test1 from '../assets/testimonial-1.jpg'
import test2 from '../assets/testimonial-2.jpg'
import test3 from '../assets/testimonial-3.jpg'
import test4 from '../assets/testimonial-4.jpg'
import cake1 from '../assets/cake1.jpg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg';
import cake4 from '../assets/cake4.jpg';
import cake5 from '../assets/cake5.jpg';
import cake6 from '../assets/cake6.jpg';
import cake7 from '../assets/cake7.jpg';
import cake8 from '../assets/cake8.jpg';
import cake9 from '../assets/cake9.jpg';
import cake10 from '../assets/cake10.jpg';
import cake11 from '../assets/cake11.jpg';
import cake12 from '../assets/cake12.jpg';
import cake14 from '../assets/cake14.jpg';
import cake15 from '../assets/cake15.jpg';
import cake16 from '../assets/cake16.jpg';
import cake17 from '../assets/cake17.jpg';
import cake18 from '../assets/cake18.jpg';
import cake19 from '../assets/cake19.jpg';


const Home = () => {
  const statsData = [
    { icon: 'bi-star', label: 'OUR EXPERIENCE', value: 12745 },
    { icon: 'bi-people', label: 'CAKE SPECIALIST', value: 13345 },
    { icon: 'bi-check2-square', label: 'COMPLETE PROJECT', value: 11345 },
    { icon: 'bi-cup-hot', label: 'HAPPY CLIENTS', value: 14455 },
  ];

  const chefs = [
    { name: "John Doe", designation: "Head Chef", image: chef1 },
    { name: "Micheal Lee", designation: "Pastry Expert", image: chef2 },
    { name: "Sarah Paul", designation: "Cake Designer", image: chef3 },
  ];


  const { addToCart, setOrderPlaced } = useContext(CartContext);
    const { wishlist, toggleWishlist } = useContext(WishlistContext);
  
    const [selectedCategory, setSelectedCategory] = useState("Birthday");
  
    useEffect(() => {
      setOrderPlaced(false);
    }, [setOrderPlaced]);
  
    const productList = [
      { id: 1, name: "Chocolate Cake", price: 700, image: cake5, category: "Birthday" },
      { id: 2, name: "Vanilla Dream Cake", price: 650, image: cake6, category: "Birthday" },
      { id: 3, name: "Strawberry Delight", price: 750, image: cake1, category: "Birthday" },
      { id: 4, name: "Red Velvet Special", price: 800, image: cake2, category: "Birthday" },
      { id: 5, name: "Butterscotch Bliss", price: 680, image: cake14, category: "Birthday" },
      { id: 6, name: "Caramel Fantasy", price: 720, image: cake10, category: "Birthday" },
  
      { id: 7, name: "Golden Elegance", price: 1200, image: cake11, category: "Wedding" },
      { id: 8, name: "Royal Delight", price: 1500, image: cake12, category: "Wedding" },
      { id: 9, name: "Velvet Rose", price: 1400, image: cake3, category: "Wedding" },
      { id: 10, name: "White Heaven", price: 1300, image: cake4, category: "Wedding" },
      { id: 11, name: "Pearl Layer Cake", price: 1600, image: cake8, category: "Wedding" },
      { id: 12, name: "Classic Charm", price: 1100, image: cake9, category: "Wedding" },
  
      { id: 13, name: "Creative Spark", price: 900, image: cake7, category: "Custom" },
      { id: 14, name: "Rainbow Layers", price: 950, image: cake15, category: "Custom" },
      { id: 15, name: "Photo Cake", price: 980, image: cake16, category: "Custom" },
      { id: 16, name: "Fondant Magic", price: 990, image: cake17, category: "Custom" },
      { id: 17, name: "Theme Cake", price: 1000, image: cake18, category: "Custom" },
      { id: 18, name: "Designer Delight", price: 1050, image: cake19, category: "Custom" }
    ];
  
    const filteredProducts = productList.filter(p => p.category === selectedCategory);
  
    const isInWishlist = (id) => wishlist.some(item => item.id === id);

    /* 🔥 HANDLERS */
const handleWishlist = (product) => {
    const exists = isInWishlist(product.id);
    toggleWishlist(product);

    if (exists) {
      toast.info("Removed from wishlist 💔");
    } else {
      toast.success("Added to wishlist ❤️");
    }
  };

const handleAddToCart = (product) => {
  addToCart(product);
  toast.success("Item added to cart 🛒");
};


    const about1Ref = useRef(null);

    const navigate = useNavigate();
  

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
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        autoplay: true
      }
    }
  ]
};

  return (
    <>
   <div className="home">
  <div className="container">

    {/* TEXT SECTION */}
    <div className="row">
      <div className="col-12 col-md-6 my-5 text-center text-md-start">

        <p className="hero-topline">
          Freshly Baked • Premium Quality • Since 2012
        </p>

        <h2 className="my-4 hero-subtitle">Super Crispy</h2>
        <h1 className="my-4 hero-title">CAKEZONE</h1>
        <h3 className="my-4 hero-tagline">THE BEST CAKE IN INDIA</h3>

      </div>
    </div>

    {/* BUTTON + PLAY */}
    <div className="row align-items-center">
      <div className="col-12 col-md-6 d-flex align-items-center gap-4 justify-content-center justify-content-md-start">

        <button
          className="button my-4"
          onClick={() =>
            about1Ref.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Read More
        </button>

        <div className="play-video-container">
          <div className="play-icon"></div>
          <span className="play-text">Play Video</span>
        </div>

      </div>
    </div>

  </div>
</div>


      <section ref={about1Ref} className="about1 text-center">
  <div className="container">
    <div className="row">
      <div className="col-12 my-5">
        <h4>ABOUT US</h4>
        <h1>WELCOME TO CAKEZONE</h1>
        <div className="title-underline">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="about2">
  <div className="container">
    <div className="row align-items-center">

      {/* IMAGE */}
      <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
        <img
          src={aboutimage}
          alt="Delicious Cake"
          className="img-fluid"
        />
      </div>

      {/* CONTENT */}
      <div className="col-12 col-md-6">
        <p className="para1">
          Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem sed stet labore lorem sit clita duo.
        </p>

        <p className="para2">
          Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit.
          Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
          Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna.
        </p>

        <div className="row mt-4">
          <div className="col-12 col-md-6 mb-4">
            <div className="features text-center text-md-start">
              <div className="icon-box">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h5>100% HEALTHY</h5>
              <p className="para2">
                Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="features text-center text-md-start">
              <div className="icon-box">
                <i className="bi bi-award"></i>
              </div>
              <h5>AWARD WINNING</h5>
              <p className="para2">
                Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


     <section className="about3">
  <div className="stats-section text-center py-5">
    <div className="container">
      <div className="row">

        {statsData.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 mb-4"
          >
            <div className="stat-box">
              <div className="icon-box">
                <i className={`bi ${item.icon}`}></i>
              </div>
              <h6>{item.label}</h6>
              <h2>
                <CountUp start={0} end={item.value} duration={5.5} />
              </h2>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>


      <section className='menu1 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <h4>Menu & Pricing</h4>
              <h1>EXPLORE OUR CAKE</h1>
              <div className='title-underline'>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="category-bar text-center my-4">
        <div className="category-container">
          <button
            className={`category ${selectedCategory === "Birthday" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Birthday")}
          >
            BIRTHDAY
          </button>
          <button
            className={`category ${selectedCategory === "Wedding" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Wedding")}
          >
            WEDDING
          </button>
          <button
            className={`category ${selectedCategory === "Custom" ? "active" : ""}`}
            onClick={() => setSelectedCategory("Custom")}
          >
            CUSTOM
          </button>
        </div>
      </div>

      {/* 🔹 Product Grid */}
           <div className="container product-section">
                   <div className="row justify-content-center g-4">
                     {filteredProducts.map((p) => (
                       <div
                         key={p.id}
                         className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
                       >
                         <div className="product-card">
           
                           <span
                             className={`wishlist-icon ${isInWishlist(p.id) ? "active" : ""}`}
                             onClick={() => handleWishlist(p)}
                           >
                             <i className="fa-solid fa-heart"></i>
                           </span>
           
                           {/* ✅ IMAGE WITHOUT WRAPPER */}
                           <LazyLoadImage
                             src={p.image}
                             effect="opacity"
                             className="product-img"
                           />
           
                           <h4 className="mt-3">{p.name}</h4>
                           <p className="price">₹{p.price}</p>
           
                           <button
                             className="btn btn-warning"
                             onClick={() => handleAddToCart(p)}
                           >
                             Add to Cart
                           </button>
           
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
      

      <section className='master1 text-center my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4>Team Members</h4>
              <h1>OUR MASTER CHEFS</h1>
              <div className='title-underline'><span></span></div>
            </div>
          </div>
        </div>
      </section>

      <section className='container py-5 text-center'>
        <div className='row justify-content-center g-4'>
          {chefs.map((chef, index) => (
            <div className='col-md-4 col-sm-6' key={index}>
              <div className='chef-card'>
                <div className='chef-img-container'>
                  <img src={chef.image} alt={chef.name} className='chef-img' />
                </div>
                <div className='chef-info'>
                  <h5 className='chef-name'>{chef.name}</h5>
                  <p className='chef-designation'>{chef.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='special text-center'>
  <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
        
        <h3 className='kombo'>Special Kombo Pack</h3>
        <h1 className='crispy'>SUPER CRISPY CAKES</h1>

        <div className='title-underline mx-auto'>
          {/* <span></span> */}
        </div>

        <p className='special-para text-white'>
          Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea.
          Eos vero eos vero ea et dolore eirmod et.
          Dolores diam duo lorem. Elitr ut dolores magna sit.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-2 my-4">
          <button
            className="order-btn text-white"
            onClick={() => navigate("/menu")}
          >
            SHOP NOW
          </button>

          <button
            className="read-btn text-white"
            onClick={() => navigate("/about")}
          >
            READ MORE
          </button>
        </div>

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

export default Home

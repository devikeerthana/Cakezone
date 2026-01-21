import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Components/CartContext";
import { WishlistProvider } from "./Components/WishlistContext";

import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Masterchefs from "./Components/Masterchefs";
import OurService from "./Components/OurService";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Success from "./Components/Success";
import Wishlist from "./Components/Wishlist";
import ScrollToTop from "./Components/ScrollToTop";

import "./index.css";
import "./Components/Toast.css";
import "./Components/ScrollToTop.css";

/* 🔥 TOAST */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  /* 🔹 LOADING SCREEN */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <CartProvider>
      <WishlistProvider>
        {/* 🔹 TOPBAR & NAVBAR */}
        <Topbar />
        <Navbar />

        {/* 🔹 SCROLL TO TOP BUTTON */}
        <ScrollToTop />

        {/* 🔹 MAIN PAGE CONTENT */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/masterchefs" element={<Masterchefs />} />
            <Route path="/ourservice" element={<OurService />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>

        {/* 🔹 FOOTER */}
        <Footer />

        {/* 🔹 GLOBAL TOAST NOTIFICATIONS */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          newestOnTop
          pauseOnHover
          theme="light" // professional light toast
        />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

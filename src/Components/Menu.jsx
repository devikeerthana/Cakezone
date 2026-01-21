import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { WishlistContext } from "./WishlistContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Menu.css";

/* 🔥 TOAST */
import { toast } from "react-toastify";

import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";
import cake5 from "../assets/cake5.jpg";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";
import cake8 from "../assets/cake8.jpg";
import cake9 from "../assets/cake9.jpg";
import cake10 from "../assets/cake10.jpg";
import cake11 from "../assets/cake11.jpg";
import cake12 from "../assets/cake12.jpg";
import cake14 from "../assets/cake14.jpg";
import cake15 from "../assets/cake15.jpg";
import cake16 from "../assets/cake16.jpg";
import cake17 from "../assets/cake17.jpg";
import cake18 from "../assets/cake18.jpg";
import cake19 from "../assets/cake19.jpg";

const Menu = () => {
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

  const filteredProducts = productList.filter(
    (p) => p.category === selectedCategory
  );

  const isInWishlist = (id) =>
    wishlist.some((item) => item.id === id);

  /* 🔥 HANDLERS WITH TOAST */
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Item added to cart 🛒");
  };

  const handleWishlist = (product) => {
    const exists = isInWishlist(product.id);
    toggleWishlist(product);

    if (exists) {
      toast.info("Removed from wishlist 💔");
    } else {
      toast.success("Added to wishlist ❤️");
    }
  };

  return (
    <>
      {/* HEADER */}
      <section className="menu text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-4">
              <h1>MENU & PRICING</h1>
            </div>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="menu1 text-center">
        <div className="container my-3">
          <h4>Menu & Pricing</h4>
          <h1>EXPLORE OUR CAKES</h1>
        </div>
      </section>

      {/* CATEGORY */}
      <div className="category-bar">
        <div className="category-container">
          {["Birthday", "Wedding", "Custom"].map((cat) => (
            <button
              key={cat}
              className={`category ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="container product-section">
  <div className="product-grid">
    {filteredProducts.map((p) => (
      <div className="product-card position-relative" key={p.id}>
        
        {/* ❤️ WISHLIST ICON */}
        <span
  className={`wishlist-icon ${isInWishlist(p.id) ? "active" : ""}`}
  onClick={() => handleWishlist(p)}
>
  ♥
</span>


        <LazyLoadImage
          src={p.image}
          alt={p.name}
          effect="blur"
        />

        <h4 className="mt-3">{p.name}</h4>
        <p>₹{p.price}</p>

        <button onClick={() => handleAddToCart(p)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Menu;

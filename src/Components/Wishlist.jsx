import React, { useContext } from "react";
import { WishlistContext } from "./WishlistContext";
import { CartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Wishlist.css";

/* 🔥 TOAST */
import { toast } from "react-toastify";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <h1 className="fw-bold text-secondary">Wishlist is empty</h1>
          <p className="text-muted fs-5">
            You haven’t added anything yet
          </p>
        </div>
      </div>
    );
  }

  const handleRemoveWishlist = (product) => {
    toggleWishlist(product);
    toast.info("Removed from wishlist 💔");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Item added to cart 🛒");
  };

  return (
    <div className="container product-section">
      <div className="row justify-content-center g-4">
        {wishlist.map((p) => (
          <div
            key={p.id}
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
          >
            <div className="product-card">

              {/* ❤️ REMOVE FROM WISHLIST */}
              <span
                className="wishlist-icon active"
                onClick={() => handleRemoveWishlist(p)}
              >
                ❤️
              </span>

              <LazyLoadImage
                src={p.image}
                alt={p.name}
                effect="blur"
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
  );
};

export default Wishlist;

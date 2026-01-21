import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Success.css";

const Success = () => {
  const navigate = useNavigate();
  const { setOrderPlaced } = useContext(CartContext);

  useEffect(() => {
    // ✅ mark order placed (view only mode)
    setOrderPlaced(true);

    // ⏳ auto redirect (same as earlier)
    const timer = setTimeout(() => {
      navigate("/cart");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate, setOrderPlaced]);

  return (
    <div className="success-wrapper">
      <div className="success-card">
        {/* ✅ ICON */}
        <div className="success-icon">✅</div>

        {/* ✅ TITLE */}
        <h1>Order Placed Successfully!</h1>

        {/* ✅ MESSAGE */}
        <p className="success-msg">
          Thank you for ordering from <b>CakeZone</b> 🎂
          <br />
          Your order has been confirmed and is being prepared.
        </p>

        {/* ✅ ORDER INFO */}
        <div className="order-info">
          <p><strong>Status:</strong> Confirmed</p>
          <p><strong>Payment:</strong> Cash on Delivery</p>
          <p><strong>Delivery:</strong> Within 24 Hours</p>
        </div>

        {/* ✅ BUTTON */}
        <button
          className="success-btn"
          onClick={() => navigate("/menu")}
        >
          Continue Shopping
        </button>

        {/* ✅ REDIRECT INFO */}
        <p className="redirect-text">
          ⏳ Redirecting to home in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;

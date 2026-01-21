import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotal, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    instructions: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const { name, email, mobile, address, city, pincode } = form;

    if (!name || !email || !mobile || !address || !city || !pincode) {
      alert("Please fill all required details!");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // ✅ ONLY THIS – no duplicate
    placeOrder();

    navigate("/success");
  };

  return (
    <div className="checkout-container">
      {/* ================= Delivery Details ================= */}
      <div className="checkout-card">
        <h2>Delivery Details</h2>

        <input type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile Number *" value={form.mobile} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address *" value={form.address} onChange={handleChange} />
        <input type="text" name="city" placeholder="City *" value={form.city} onChange={handleChange} />
        <input type="text" name="pincode" placeholder="Pincode *" value={form.pincode} onChange={handleChange} />
        <input type="text" name="instructions" placeholder="Delivery Instructions (optional)" value={form.instructions} onChange={handleChange} />
      </div>

      {/* ================= Payment Method ================= */}
      <div className="checkout-card">
        <h2>Payment Method</h2>

        <div className="payment-options">
          <label className={`payment-card ${form.paymentMethod === "cod" ? "active" : ""}`}>
            <input type="radio" name="paymentMethod" value="cod" checked={form.paymentMethod === "cod"} onChange={handleChange} />
            <span>Cash on Delivery</span>
          </label>

          <label className={`payment-card ${form.paymentMethod === "upi" ? "active" : ""}`}>
            <input type="radio" name="paymentMethod" value="upi" checked={form.paymentMethod === "upi"} onChange={handleChange} />
            <span>UPI / Paytm / PhonePe</span>
          </label>

          <label className={`payment-card ${form.paymentMethod === "card" ? "active" : ""}`}>
            <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === "card"} onChange={handleChange} />
            <span>Credit / Debit Card</span>
          </label>
        </div>
      </div>

      {/* ================= Order Summary ================= */}
      <div className="checkout-card">
        <h2>Order Summary</h2>

        <div className="summary-list">
          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name} x {item.quantity}</p>
                <p>₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <h3>Total: ₹{getTotal()}</h3>

        <button type="button" className="confirm-btn" onClick={handlePlaceOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;

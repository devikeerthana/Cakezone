import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

/* 🔥 TOAST */
import { toast } from "react-toastify";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotal,
    orderPlaced,
    orders,
    setOrders,
  } = useContext(CartContext);

  const [showOrders, setShowOrders] = useState(false);
  const navigate = useNavigate();

  // 🔥 REMOVE FROM PLACED ORDERS + TOAST
  const removeFromPlacedOrder = (orderId, itemId) => {
    setOrders((prevOrders) =>
      prevOrders
        .map((order) =>
          order.id === orderId
            ? {
                ...order,
                items: order.items.filter(
                  (item) => item.id !== itemId
                ),
              }
            : order
        )
        .filter((order) => order.items.length > 0)
    );

    toast.info("Removed item from placed order 🗑️");
  };

  const handleRemoveCart = (id) => {
    removeFromCart(id);
    toast.info("Item removed from cart 🗑️");
  };

  const handleCheckout = () => {
    navigate("/checkout");
    toast.success("Proceeding to checkout 💳");
  };

  return (
    <div className="cart-page my-5">
      <div className="container text-center">
        <h2 className="your-cart mb-4">YOUR CART</h2>

        {/* 🔹 VIEW PLACED ORDERS */}
        {orders.length > 0 && (
          <button
            className="btn btn-info mb-3"
            onClick={() => setShowOrders((prev) => !prev)}
          >
            {showOrders ? "Hide Placed Orders" : "View Placed Orders"}
          </button>
        )}

        {/* 🔹 PLACED ORDERS */}
        {showOrders &&
          orders.map((order) => (
            <div key={order.id} className="mb-4">
              <h5>Order placed on: {order.date.toLocaleString()}</h5>

              <div className="row justify-content-center g-4">
                {order.items.map((item) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
                    key={item.id}
                  >
                    <div className="cart-item card border-0 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img-top mx-auto mt-3"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-dark fw-bold">
                          ₹{item.price} × {item.quantity}
                        </p>

                        <button
                          className="btn btn-danger btn-sm mt-2"
                          onClick={() =>
                            removeFromPlacedOrder(order.id, item.id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* 🔹 CURRENT CART */}
        {cart.length === 0 && !orderPlaced ? (
          <p className="empty">Your Cart Is Empty</p>
        ) : (
          <>
            <div className="row justify-content-center g-4">
              {cart.map((item) => (
                <div
                  className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
                  key={item.id}
                >
                  <div className="cart-item card border-0 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top mx-auto mt-3"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-dark fw-bold">
                        ₹{item.price}
                      </p>

                      <div className="d-flex justify-content-center align-items-center gap-3">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={orderPlaced || item.quantity <= 1}
                        >
                          −
                        </button>

                        <span className="fw-bold">{item.quantity}</span>

                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          disabled={orderPlaced}
                        >
                          +
                        </button>
                      </div>

                      {!orderPlaced && (
                        <button
                          className="btn btn-danger btn-sm mt-3"
                          onClick={() => handleRemoveCart(item.id)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total mt-5">
              <h4>Total: ₹{getTotal()}</h4>
            </div>

            {!orderPlaced && (
              <div className="mt-4 text-center">
                <button
                  className="btn btn-warning px-5 py-2"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

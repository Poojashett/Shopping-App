import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../Utils/slice/cartSlice";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handlePayment = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      dispatch(clearCart());
    }, 3000);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Cart is empty. Explore!</p>
          <Link to="/" style={{textDecoration:"none" , color:"white"}}>
            <button className="explore-button">Explore</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </p>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${calculateTotal()}</h2>
            <button className="payment-button" onClick={handlePayment}>
              Proceed to Payment
            </button>
            {showMessage && (
              <p className="payment-message">Payment Successful!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

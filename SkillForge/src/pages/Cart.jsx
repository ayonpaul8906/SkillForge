import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="page-container">
      <h2>Shopping Cart ({cartItems.length})</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn-primary">Browse Courses</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>By {item.instructor}</p>
                  <span className="cart-price">${item.price}</span>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="summary-row">
              <span>Tax (Estimated)</span>
              <span>$0.00</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button className="btn-primary full-width">Checkout <ArrowRight size={16}/></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
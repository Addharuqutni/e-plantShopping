import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';

const CartItem = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return total + cost * item.quantity;
  }, 0);
  
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Coming Soon! This feature will be available in the next update.');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-summary">
          <div className="cart-summary-item">
            <span className="summary-label">Total Items:</span>
            <span className="summary-value">{totalQuantity}</span>
          </div>
          <div className="cart-summary-item total-cost">
            <span className="summary-label">Total Cost:</span>
            <span className="summary-value">${totalCost.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants to your cart yet.</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-items-container">
          <div className="cart-items-header">
            <div className="header-product">Product</div>
            <div className="header-price">Unit Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-subtotal">Subtotal</div>
            <div className="header-actions">Actions</div>
          </div>
          
          {cartItems.map(item => {
            const unitPrice = parseFloat(item.cost.replace('$', ''));
            const subtotal = unitPrice * item.quantity;
            
            return (
              <div className="cart-item-card" key={item.name}>
                <div className="item-product">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="item-name">{item.name}</div>
                </div>
                
                <div className="item-price">${unitPrice.toFixed(2)}</div>
                
                <div className="item-quantity">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrement" 
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn increment" 
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="item-subtotal">${subtotal.toFixed(2)}</div>
                
                <div className="item-actions">
                  <button 
                    onClick={() => handleRemove(item.name)} 
                    className="delete-button"
                    aria-label="Remove item"
                  >
                    <span className="delete-icon">🗑️</span>
                    <span className="delete-text">Remove</span>
                  </button>
                </div>
              </div>
            );
          })}
          
          <div className="cart-footer">
            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Subtotal:</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="cart-total-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="cart-total-row grand-total">
                <span>Total:</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="cart-actions">
              <button 
                className="continue-shopping-btn" 
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
              <button 
                className="checkout-btn" 
                onClick={handleCheckout} 
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
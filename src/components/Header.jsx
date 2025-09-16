import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Paradise Nursery</span>
        </Link>
        
        <nav className="nav-links">
          <NavLink 
            to="/products" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon" role="img" aria-label="plants">🌿</span>
            <span className="nav-text">Plants</span>
          </NavLink>
          
          <NavLink 
            to="/cart" 
            className={({ isActive }) => `nav-link cart-link ${isActive ? 'active' : ''}`}
          >
            <div className="cart-icon-container">
              <span className="cart-icon" role="img" aria-label="cart">
                🛒
              </span>
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </div>
            <span className="nav-text">Cart</span>
          </NavLink>
        </nav>
        
        <div className="page-indicator">
          {location.pathname === '/products' && <span>Browsing Plants</span>}
          {location.pathname === '/cart' && <span>Your Shopping Cart</span>}
          {location.pathname === '/' && <span>Welcome</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
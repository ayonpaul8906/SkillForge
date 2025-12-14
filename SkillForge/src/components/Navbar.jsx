import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, User, Settings, LogOut, X, LogIn } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// 1. Accept isAuth and onLogout props
const Navbar = ({ searchTerm, setSearchTerm, cartCount, isAuth, onLogout }) => {
  const [showNotifs, setShowNotifs] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate('/dashboard'); 
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <span className="logo-icon h-12 w-12"><img src="/logo.png" alt="logo" /></span>
            <span className="logo-text">Skill<span className="highlight">Forge</span></span>
          </Link>
          
          {/* Only show nav links if authenticated */}
          {isAuth && (
            <div className="nav-links desktop-only">
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Explore</NavLink>
              <NavLink to="/mentors" className={({ isActive }) => isActive ? "active" : ""}>Mentors</NavLink>
              <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
            </div>
          )}
        </div>

        {/* Only show Search if authenticated */}
        <div className="nav-center">
          {isAuth && (
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          )}
        </div>

        <div className="nav-right">
          {isAuth ? (
            <>
              {/* LOGGED IN VIEW */}
              <div className="relative-container">
                <button className="icon-btn" onClick={() => setShowNotifs(!showNotifs)}>
                  <Bell size={20} />
                  <span className="badge-dot"></span>
                </button>
                {showNotifs && (
                  <div className="dropdown-menu notifications-dropdown">
                    <div className="dropdown-header">
                      <span>Notifications</span>
                      <button onClick={() => setShowNotifs(false)}><X size={14}/></button>
                    </div>
                    <div className="dropdown-item unread">
                      <p><strong>Angela Yu</strong> posted a new lesson.</p>
                      <span>2 mins ago</span>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/cart" className="icon-btn relative-container">
                <ShoppingCart size={20} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>

              <div className="relative-container">
                <div className="user-avatar" onClick={() => setShowProfileMenu(!showProfileMenu)}>NU</div>
                {showProfileMenu && (
                  <div className="dropdown-menu profile-dropdown">
                    <div className="dropdown-user-info">
                      <div className="user-avatar small">JD</div>
                      <div><h4>New User</h4><small>Student</small></div>
                    </div>
                    <hr />
                    <Link to="/profile" className="dropdown-item" onClick={() => setShowProfileMenu(false)}>
                      <User size={16} /> Profile
                    </Link>
                    <hr />
                    {/* Logout Button */}
                    <button className="dropdown-item danger" onClick={() => {
                      onLogout();
                      setShowProfileMenu(false);
                    }}>
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* LOGGED OUT VIEW */
            <Link to="/login" className="btn-primary-sm">
              Sign In <LogIn size={16} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
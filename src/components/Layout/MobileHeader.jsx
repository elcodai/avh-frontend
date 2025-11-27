import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './MobileHeader.css';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/dining', label: 'Dining' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/reservations', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      {/* Compact Main Header - Only logo and menu button */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-icon">AVH</div>
              <div className="logo-text">
                <span className="hotel-name">Addis View Hotel</span>
              </div>
            </Link>

            <button 
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Only appears when menu button is clicked */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <div className="nav-links">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Contact info in mobile menu */}
            <div className="mobile-contact">
              <a href="tel:+251-11-124-97-66" className="contact-link">
                <Phone size={16} />
                +251-11-124-97-66
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
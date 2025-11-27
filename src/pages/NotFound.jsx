import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              <Home size={18} />
              Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
          <div className="quick-links">
            <h3>Popular Pages</h3>
            <div className="links-grid">
              <Link to="/rooms">Rooms & Suites</Link>
              <Link to="/reservations">Make Reservation</Link>
              <Link to="/amenities">Amenities</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
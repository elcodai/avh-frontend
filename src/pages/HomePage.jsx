import AboutExcerpt from '../components/About/AboutExcerpt';
import ServicesOverview from '../components/Services/ServicesOverview';
import AmenitiesHighlights from '../components/Amenities/AmenitiesHighlights';
import ContactPrompt from '../components/CTA/ContactPrompt';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        {/* Add this missing div for the background image */}
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Experience Luxury with Magnificent City Views</h1>
            <p className="hero-description">
              Discover Addis View Hotel - where exceptional service meets breathtaking
              panoramic views of Addis Ababa.
            </p>

            <div className="hero-buttons">
              <Link to="/reservations" className="btn-primary">Book Your Stay</Link>
              <Link to="/rooms" className="btn-secondary">View Rooms</Link>
            </div>
          </div>
        </div>
      </section>

      <AboutExcerpt />
      <ServicesOverview />
      <AmenitiesHighlights />
      <ContactPrompt />
    </>
  );
};

export default HomePage;
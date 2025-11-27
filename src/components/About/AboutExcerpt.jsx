import { MapPin, Navigation, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutExcerpt.css';

const AboutExcerpt = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Experience Ethiopian Elegance</h2>
            <p className="about-description">
              Perched in the vibrant, mountainous capital of Addis Ababa, Addis View Hotel 
              embodies the rich heritage and timeless sophistication of Ethiopia. Discover 
              unparalleled hospitality where modern luxury meets authentic cultural charm.
            </p>
            
            <div className="location-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Navigation size={20} />
                </div>
                <div className="feature-content">
                  <h3>Prime Location</h3>
                  <p>Just 7 km from Bole International Airport, on the main Arat Kilo to Megenagna route</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Landmark size={20} />
                </div>
                <div className="feature-content">
                  <h3>Cultural Gateway</h3>
                  <p>Steps away from the historic Grand Palace and Addis Ababa's most significant landmarks</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <MapPin size={20} />
                </div>
                <div className="feature-content">
                  <h3>Panoramic Views</h3>
                  <p>Magnificent cityscape vistas from our elevated location in the heart of the capital</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <Link to="/about" className="cta-button primary">
                Discover Our Story
              </Link>
              <Link to="/gallery" className="cta-button secondary">
                View Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExcerpt;